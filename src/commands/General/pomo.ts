import { Category } from '@discordx/utilities'
import { ActionRowBuilder, ApplicationCommandOptionType, ButtonBuilder, ButtonInteraction, ButtonStyle, ChannelType, CommandInteraction, ComponentType as DiscordComponentType, EmbedBuilder, Message, MessageActionRowComponentBuilder } from 'discord.js'
import { ButtonComponent, Client, ComponentType } from 'discordx'

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
		name: 'pomo',
	})
	async pomo(
		@SlashOption({
			name: 'duration',
			localizationSource: 'COMMANDS.POMO.OPTIONS.DURATION',
			type: ApplicationCommandOptionType.Integer,
			required: true,
		}) duration: number,
		@SlashOption({
			name: 'break_duration',
			localizationSource: 'COMMANDS.POMO.OPTIONS.BREAK_DURATION',
			type: ApplicationCommandOptionType.Integer,
			required: true,
		}) breakDuration: number,
		@SlashOption({
			name: 'intervals',
			localizationSource: 'COMMANDS.POMO.OPTIONS.INTERVALS',
			type: ApplicationCommandOptionType.Integer,
			required: true,
		}) intervals: number,
		@SlashOption({
			name: 'name',
			localizationSource: 'COMMANDS.POMO.OPTIONS.NAME',
			type: ApplicationCommandOptionType.String,
			required: false,
		}) pomodoroName: string,
		interaction: CommandInteraction
	) {
		const msg = (await interaction.followUp({ content: 'Creating your pomodoro...', fetchReply: true })) as Message

		let pomodoroParent = await interaction.guild?.channels.cache.find(c => c.name === 'Pomodoros' && c.type === ChannelType.GuildCategory)

		if (!pomodoroParent) {
			pomodoroParent = await interaction.guild?.channels.create({
				name: 'Pomodoros',
				type: ChannelType.GuildCategory,
				permissionOverwrites: [
					{
						id: interaction.guild.id,
						deny: ['ViewChannel'],
					},
				],
			})
		}

		const newChannel = await interaction.guild?.channels.create({
			name: pomodoroName ?? `pomodoro-${Math.floor(Math.random() * 1000)}`,
			type: ChannelType.GuildText,
			parent: pomodoroParent?.id,
			permissionOverwrites: [
				{
					id: interaction.guild.id,
					deny: ['ViewChannel'],
				},
				{
					id: interaction.user.id,
					deny: ['ViewChannel'],
				},
				{
					id: interaction.guild.roles.everyone.id,
					deny: ['ViewChannel'],
				},
			],
		})

		if (!newChannel) {
			return await msg.edit('Failed to create channel, please try again')
		}

		const pomodoro = await this.pomoService.createPomo(duration, breakDuration, intervals, newChannel.id)

		if (!pomodoro) {
			return await msg.edit('Failed to create pomodoro, please try again')
		}

		const embed = new EmbedBuilder()
			.setAuthor({
				name: `${interaction.user.displayName} created a Pomodoro 🍅!`,
				iconURL: interaction.user.displayAvatarURL({ forceStatic: false }),
			})
			.addFields([
				{
					name: 'Duration',
					value: `${duration} minutes`,
					inline: true,
				},
				{
					name: 'Break Duration',
					value: `${breakDuration} minutes`,
					inline: true,
				},
				{
					name: 'Intervals',
					value: `${intervals}`,
					inline: true,
				},
			])

		const btn = new ButtonBuilder()
			.setLabel('Join Pomodoro')
			.setStyle(ButtonStyle.Primary)
			.setCustomId(`join`)

		  const buttonRow
			= new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
			  btn
			)

		await msg.edit({
			content: '',
			embeds: [embed],
			components: [
				buttonRow,
			],
		})

		const collector = msg.createMessageComponentCollector({ componentType: DiscordComponentType.Button, time: 3_600_000 })

		collector.on('collect', async (interaction) => {
			if (interaction.customId === 'join') {
				newChannel.permissionOverwrites.edit(interaction.user.id, {
					ViewChannel: true,
				})
				interaction.reply({
					content: `You've been added! You can access it here: <#${newChannel.id}>`,
					ephemeral: true,
				})
			}
		})

		collector.on('end', async () => {
			btn.setDisabled(true)
			await msg.edit({
				embeds: [embed],
				components: [
					buttonRow,
				],
			})
		})
	}

}
