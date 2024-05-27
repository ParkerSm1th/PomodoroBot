'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const { Migration } = require('@mikro-orm/migrations')

class Migration20240527180327 extends Migration {

	async up() {
		this.addSql('create table `pomo_instance` (`id` text not null, `channel_id` text not null, `duration` integer not null, `break_duration` integer not null, `intervals_remaining` integer not null, `current_segment` text not null default \'work\', `next_segment` datetime not null, `created_at` datetime not null, primary key (`id`));')
	}

}
exports.Migration20240527180327 = Migration20240527180327
