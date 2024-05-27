import { Category } from '@discordx/utilities'
import { ApplicationCommandOptionType, ButtonBuilder, ButtonStyle, ChannelType, CommandInteraction, Message } from 'discord.js'
import { Client } from 'discordx'

import { Discord, Injectable, Slash, SlashOption } from '@/decorators'

import { Pomos } from '../../services'

@Discord()
@Injectable()
@Category('General')
export default class PingCommand {

	constructor(
		private pomoService: Pomos
	) {}

	@Slash({
		name: 'pomos',
	})
	async pomo(
		interaction: CommandInteraction
	) {
		const msg = (await interaction.followUp({ content: 'Fetching Current Pomos', fetchReply: true })) as Message

		const pomos = await this.pomoService.pomos

		if (!pomos) {
			return await msg.edit('Failed to fetch pomodoros')
		}

		await msg.edit(pomos.map(pomo => `id: ${pomo.id}, duration: ${pomo.duration}, break duration: ${pomo.breakDuration}, intervals remaining: ${pomo.intervalsRemaining}, segment: ${pomo.currentSegment}, next segment: ${pomo.nextSegment}`).join('\n'))
	}

}
