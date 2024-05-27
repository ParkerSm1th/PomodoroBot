import dayjs from 'dayjs'
import { Client } from 'discordx'
import { Paste, RentryClient } from 'rentry-pastebin'
import { v4 } from 'uuid'

import { Schedule, Service } from '@/decorators'
import { Pastebin as PastebinEntity } from '@/entities'
import { Database } from '@/services'

import { PomoInstance } from '../entities/PomoInstance'

@Service()
export class Pomos {

	pomos: PomoInstance[] = []

	constructor(
		private db: Database,
		private client: Client
	) {
		this.populatePomosFromDB()
	}

	async populatePomosFromDB(): Promise<void> {
		this.pomos = await this.db.get(PomoInstance).findAll()
	}

	async updatePomosLocally(pomo: PomoInstance): Promise<void> {
		this.pomos = this.pomos.filter(p => p.id !== pomo.id)
		this.pomos.push(pomo)
	}

	async createPomo(duration: number, breakDuration: number, intervals: number, channelId: string): Promise<PomoInstance | undefined> {
		const pomoEntity = new PomoInstance()
		pomoEntity.id = v4()
		pomoEntity.duration = duration
		pomoEntity.breakDuration = breakDuration
		pomoEntity.intervalsRemaining = intervals
		pomoEntity.channelId = channelId
		pomoEntity.nextSegment = dayjs(currentTime()).add(duration + 1, 'minute').toDate()
		pomoEntity.createdAt = new Date()

		const channelForPomo = await this.client.channels.fetch(pomoEntity.channelId)

		if (!channelForPomo || !channelForPomo.isTextBased()) {
			return
		}

		this.db.get(PomoInstance).persistAndFlush(pomoEntity)
		this.updatePomosLocally(pomoEntity)

		channelForPomo.send(`@everyone Welcome to your Pomodoro!\n\nWork in **${duration} minute** intervals with **${breakDuration} minute** breaks. ${intervals} intervals remaining. \n\n**Start working in 1 minute**`)

		return pomoEntity
	}

	async incrementPomo(id: string): Promise<void> {
		const pomoEntity = await this.db.get(PomoInstance).findOne({ id })

		if (!pomoEntity) {
			return
		}

		try {
			const channelForPomo = await this.client.channels.fetch(pomoEntity.channelId)

			if (!channelForPomo || !channelForPomo.isTextBased()) {
				this.db.get(PomoInstance).removeAndFlush(pomoEntity)
				this.pomos = this.pomos.filter(p => p.id !== pomoEntity.id)

				return
			}

			if (pomoEntity.intervalsRemaining === 0 && pomoEntity.currentSegment === 'work') {
				this.db.get(PomoInstance).removeAndFlush(pomoEntity)
				this.pomos = this.pomos.filter(p => p.id !== pomoEntity.id)
				channelForPomo.delete()

				return
			}

			if (pomoEntity.currentSegment === 'work') {
				pomoEntity.currentSegment = 'break'
				pomoEntity.nextSegment = dayjs(currentTime()).add(pomoEntity.breakDuration, 'minute').toDate()

				await this.db.get(PomoInstance).persistAndFlush(pomoEntity)
				this.updatePomosLocally(pomoEntity)
				channelForPomo.send(`@everyone Time for a **break**! ${pomoEntity.intervalsRemaining} intervals remaining. Be ready to work in ${pomoEntity.breakDuration} minute(s).`)

				return
			}

			pomoEntity.currentSegment = 'work'
			pomoEntity.nextSegment = dayjs(currentTime()).add(pomoEntity.duration, 'minute').toDate()
			pomoEntity.intervalsRemaining--
			this.updatePomosLocally(pomoEntity)

			channelForPomo.send(`@everyone Time for **work**! ${pomoEntity.intervalsRemaining} intervals remaining. Work for ${pomoEntity.duration} minute(s) then we will take a break.`)

			await this.db.get(PomoInstance).persistAndFlush(pomoEntity)
		} catch (e) {
			this.db.get(PomoInstance).removeAndFlush(pomoEntity)
			this.pomos = this.pomos.filter(p => p.id !== pomoEntity.id)
		}
	}

	@Schedule('*/1 * * * *')
	private async autoUpdate(): Promise<void> {
		const time = currentTime()
		const pomosToUpdate = await this.db.get(PomoInstance).find({ nextSegment: { $eq: time } })

		for (const pomo of pomosToUpdate) {
			await this.incrementPomo(pomo.id)
		}
	}

}

function currentTime() {
	const now = new Date()
	now.setSeconds(0)
	now.setMilliseconds(0)

	return now
}