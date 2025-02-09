// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fr'
	| 'ru'
	| 'uk'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	GUARDS: {
		/**
		 * T​h​i​s​ ​c​o​m​m​a​n​d​ ​i​s​ ​c​u​r​r​e​n​t​l​y​ ​d​i​s​a​b​l​e​d​.
		 */
		DISABLED_COMMAND: string
		/**
		 * T​h​i​s​ ​b​o​t​ ​i​s​ ​c​u​r​r​e​n​t​l​y​ ​i​n​ ​m​a​i​n​t​e​n​a​n​c​e​ ​m​o​d​e​.
		 */
		MAINTENANCE: string
		/**
		 * T​h​i​s​ ​c​o​m​m​a​n​d​ ​c​a​n​ ​o​n​l​y​ ​b​e​ ​u​s​e​d​ ​i​n​ ​a​ ​s​e​r​v​e​r​.
		 */
		GUILD_ONLY: string
		/**
		 * T​h​i​s​ ​c​o​m​m​a​n​d​ ​c​a​n​ ​o​n​l​y​ ​b​e​ ​u​s​e​d​ ​i​n​ ​a​ ​N​S​F​W​ ​c​h​a​n​n​e​l​.
		 */
		NSFW: string
	}
	ERRORS: {
		/**
		 * A​n​ ​u​n​k​n​o​w​n​ ​e​r​r​o​r​ ​o​c​c​u​r​r​e​d​.
		 */
		UNKNOWN: string
	}
	SHARED: {
		/**
		 * N​o​ ​d​e​s​c​r​i​p​t​i​o​n​ ​p​r​o​v​i​d​e​d​.
		 */
		NO_COMMAND_DESCRIPTION: string
	}
	COMMANDS: {
		POMO: {
			/**
			 * S​t​a​r​t​ ​a​ ​p​o​m​o​d​o​r​o​ ​t​i​m​e​r​!
			 */
			DESCRIPTION: string
			EMBED: {
				/**
				 * I​n​v​i​t​e​ ​m​e​ ​o​n​ ​y​o​u​r​ ​s​e​r​v​e​r​!
				 */
				TITLE: string
				/**
				 * [​C​l​i​c​k​ ​h​e​r​e​]​(​{​l​i​n​k​}​)​ ​t​o​ ​i​n​v​i​t​e​ ​m​e​!
				 * @param {unknown} link
				 */
				DESCRIPTION: RequiredParams<'link'>
			}
			OPTIONS: {
				DURATION: {
					/**
					 * d​u​r​a​t​i​o​n
					 */
					NAME: string
					/**
					 * H​o​w​ ​l​o​n​g​ ​s​h​o​u​l​d​ ​t​h​e​ ​w​o​r​k​ ​s​e​s​s​i​o​n​ ​l​a​s​t​?​ ​(​m​i​n​u​t​e​s​)
					 */
					DESCRIPTION: string
				}
				BREAK_DURATION: {
					/**
					 * b​r​e​a​k​_​d​u​r​a​t​i​o​n
					 */
					NAME: string
					/**
					 * H​o​w​ ​l​o​n​g​ ​s​h​o​u​l​d​ ​t​h​e​ ​b​r​e​a​k​ ​s​e​s​s​i​o​n​ ​l​a​s​t​?​ ​(​m​i​n​u​t​e​s​)
					 */
					DESCRIPTION: string
				}
				INTERVALS: {
					/**
					 * i​n​t​e​r​v​a​l​s
					 */
					NAME: string
					/**
					 * H​o​w​ ​m​a​n​y​ ​t​i​m​e​s​ ​s​h​o​u​l​d​ ​t​h​i​s​ ​h​a​p​p​e​n​?
					 */
					DESCRIPTION: string
				}
				NAME: {
					/**
					 * n​a​m​e
					 */
					NAME: string
					/**
					 * W​h​a​t​ ​s​h​o​u​l​d​ ​w​e​ ​c​a​l​l​ ​i​t​?
					 */
					DESCRIPTION: string
				}
			}
		}
		PREFIX: {
			/**
			 * p​r​e​f​i​x
			 */
			NAME: string
			/**
			 * C​h​a​n​g​e​ ​t​h​e​ ​p​r​e​f​i​x​ ​o​f​ ​t​h​e​ ​b​o​t​.
			 */
			DESCRIPTION: string
			OPTIONS: {
				PREFIX: {
					/**
					 * n​e​w​_​p​r​e​f​i​x
					 */
					NAME: string
					/**
					 * T​h​e​ ​n​e​w​ ​p​r​e​f​i​x​ ​o​f​ ​t​h​e​ ​b​o​t​.
					 */
					DESCRIPTION: string
				}
			}
			EMBED: {
				/**
				 * P​r​e​f​i​x​ ​c​h​a​n​g​e​d​ ​t​o​ ​`​{​p​r​e​f​i​x​}​`​.
				 * @param {string} prefix
				 */
				DESCRIPTION: RequiredParams<'prefix'>
			}
		}
		MAINTENANCE: {
			/**
			 * S​e​t​ ​t​h​e​ ​m​a​i​n​t​e​n​a​n​c​e​ ​m​o​d​e​ ​o​f​ ​t​h​e​ ​b​o​t​.
			 */
			DESCRIPTION: string
			EMBED: {
				/**
				 * M​a​i​n​t​e​n​a​n​c​e​ ​m​o​d​e​ ​s​e​t​ ​t​o​ ​`​{​s​t​a​t​e​}​`​.
				 * @param {string} state
				 */
				DESCRIPTION: RequiredParams<'state'>
			}
		}
		STATS: {
			/**
			 * G​e​t​ ​s​o​m​e​ ​s​t​a​t​s​ ​a​b​o​u​t​ ​t​h​e​ ​b​o​t​.
			 */
			DESCRIPTION: string
			HEADERS: {
				/**
				 * C​o​m​m​a​n​d​s
				 */
				COMMANDS: string
				/**
				 * G​u​i​l​d
				 */
				GUILDS: string
				/**
				 * A​c​t​i​v​e​ ​U​s​e​r​s
				 */
				ACTIVE_USERS: string
				/**
				 * U​s​e​r​s
				 */
				USERS: string
			}
		}
		HELP: {
			/**
			 * G​e​t​ ​g​l​o​b​a​l​ ​h​e​l​p​ ​a​b​o​u​t​ ​t​h​e​ ​b​o​t​ ​a​n​d​ ​i​t​s​ ​c​o​m​m​a​n​d​s
			 */
			DESCRIPTION: string
			EMBED: {
				/**
				 * H​e​l​p​ ​p​a​n​e​l
				 */
				TITLE: string
				/**
				 * {​c​a​t​e​g​o​r​y​}​ ​C​o​m​m​a​n​d​s
				 * @param {string} category
				 */
				CATEGORY_TITLE: RequiredParams<'category'>
			}
			SELECT_MENU: {
				/**
				 * S​e​l​e​c​t​ ​a​ ​c​a​t​e​g​o​r​y
				 */
				TITLE: string
				/**
				 * {​c​a​t​e​g​o​r​y​}​ ​c​o​m​m​a​n​d​s
				 * @param {string} category
				 */
				CATEGORY_DESCRIPTION: RequiredParams<'category'>
			}
		}
		PING: {
			/**
			 * P​o​n​g​!
			 */
			DESCRIPTION: string
			/**
			 * {​m​e​m​b​e​r​}​ ​P​o​n​g​!​ ​T​h​e​ ​m​e​s​s​a​g​e​ ​r​o​u​n​d​-​t​r​i​p​ ​t​o​o​k​ ​{​t​i​m​e​}​m​s​.​{​h​e​a​r​t​b​e​a​t​}
			 * @param {string} heartbeat
			 * @param {string} member
			 * @param {number} time
			 */
			MESSAGE: RequiredParams<'heartbeat' | 'member' | 'time'>
		}
	}
}

export type TranslationFunctions = {
	GUARDS: {
		/**
		 * This command is currently disabled.
		 */
		DISABLED_COMMAND: () => LocalizedString
		/**
		 * This bot is currently in maintenance mode.
		 */
		MAINTENANCE: () => LocalizedString
		/**
		 * This command can only be used in a server.
		 */
		GUILD_ONLY: () => LocalizedString
		/**
		 * This command can only be used in a NSFW channel.
		 */
		NSFW: () => LocalizedString
	}
	ERRORS: {
		/**
		 * An unknown error occurred.
		 */
		UNKNOWN: () => LocalizedString
	}
	SHARED: {
		/**
		 * No description provided.
		 */
		NO_COMMAND_DESCRIPTION: () => LocalizedString
	}
	COMMANDS: {
		POMO: {
			/**
			 * Start a pomodoro timer!
			 */
			DESCRIPTION: () => LocalizedString
			EMBED: {
				/**
				 * Invite me on your server!
				 */
				TITLE: () => LocalizedString
				/**
				 * [Click here]({link}) to invite me!
				 */
				DESCRIPTION: (arg: { link: unknown }) => LocalizedString
			}
			OPTIONS: {
				DURATION: {
					/**
					 * duration
					 */
					NAME: () => LocalizedString
					/**
					 * How long should the work session last? (minutes)
					 */
					DESCRIPTION: () => LocalizedString
				}
				BREAK_DURATION: {
					/**
					 * break_duration
					 */
					NAME: () => LocalizedString
					/**
					 * How long should the break session last? (minutes)
					 */
					DESCRIPTION: () => LocalizedString
				}
				INTERVALS: {
					/**
					 * intervals
					 */
					NAME: () => LocalizedString
					/**
					 * How many times should this happen?
					 */
					DESCRIPTION: () => LocalizedString
				}
				NAME: {
					/**
					 * name
					 */
					NAME: () => LocalizedString
					/**
					 * What should we call it?
					 */
					DESCRIPTION: () => LocalizedString
				}
			}
		}
		PREFIX: {
			/**
			 * prefix
			 */
			NAME: () => LocalizedString
			/**
			 * Change the prefix of the bot.
			 */
			DESCRIPTION: () => LocalizedString
			OPTIONS: {
				PREFIX: {
					/**
					 * new_prefix
					 */
					NAME: () => LocalizedString
					/**
					 * The new prefix of the bot.
					 */
					DESCRIPTION: () => LocalizedString
				}
			}
			EMBED: {
				/**
				 * Prefix changed to `{prefix}`.
				 */
				DESCRIPTION: (arg: { prefix: string }) => LocalizedString
			}
		}
		MAINTENANCE: {
			/**
			 * Set the maintenance mode of the bot.
			 */
			DESCRIPTION: () => LocalizedString
			EMBED: {
				/**
				 * Maintenance mode set to `{state}`.
				 */
				DESCRIPTION: (arg: { state: string }) => LocalizedString
			}
		}
		STATS: {
			/**
			 * Get some stats about the bot.
			 */
			DESCRIPTION: () => LocalizedString
			HEADERS: {
				/**
				 * Commands
				 */
				COMMANDS: () => LocalizedString
				/**
				 * Guild
				 */
				GUILDS: () => LocalizedString
				/**
				 * Active Users
				 */
				ACTIVE_USERS: () => LocalizedString
				/**
				 * Users
				 */
				USERS: () => LocalizedString
			}
		}
		HELP: {
			/**
			 * Get global help about the bot and its commands
			 */
			DESCRIPTION: () => LocalizedString
			EMBED: {
				/**
				 * Help panel
				 */
				TITLE: () => LocalizedString
				/**
				 * {category} Commands
				 */
				CATEGORY_TITLE: (arg: { category: string }) => LocalizedString
			}
			SELECT_MENU: {
				/**
				 * Select a category
				 */
				TITLE: () => LocalizedString
				/**
				 * {category} commands
				 */
				CATEGORY_DESCRIPTION: (arg: { category: string }) => LocalizedString
			}
		}
		PING: {
			/**
			 * Pong!
			 */
			DESCRIPTION: () => LocalizedString
			/**
			 * {member} Pong! The message round-trip took {time}ms.{heartbeat}
			 */
			MESSAGE: (arg: { heartbeat: string, member: string, time: number }) => LocalizedString
		}
	}
}

export type Formatters = {}
