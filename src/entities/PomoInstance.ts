import { Entity, EntityRepositoryType, PrimaryKey, Property } from '@mikro-orm/core'
import { EntityRepository } from '@mikro-orm/sqlite'

// ===========================================
// ================= Entity ==================
// ===========================================

@Entity({ customRepository: () => PomoInstanceRepository })
export class PomoInstance {

	[EntityRepositoryType]?: PomoInstanceRepository

	@PrimaryKey()
    id: string

	@Property()
    channelId: string

	@Property()
    duration: number

	@Property()
    breakDuration: number

	@Property()
    intervalsRemaining: number

	@Property()
    currentSegment: 'work' | 'break' = 'work'

	@Property()
    nextSegment: Date

	@Property()
    createdAt: Date = new Date()

}

// ===========================================
// =========== Custom Repository =============
// ===========================================

export class PomoInstanceRepository extends EntityRepository<PomoInstance> {

}
