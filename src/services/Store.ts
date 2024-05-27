import { Store as RxStore } from 'rxeta'

import { apiConfig } from '@/configs'
import { Service } from '@/decorators'

import { PomoInstance } from '../entities/PomoInstance'

type State = {

	authorizedAPITokens: string[]
	botHasBeenReloaded: boolean
	pomos: PomoInstance[]
	ready: {
		bot: boolean | null
		api: boolean | null
	}
}

const initialState: State = {

	authorizedAPITokens: [],
	botHasBeenReloaded: false,
	pomos: [],
	ready: {
		bot: false,
		api: apiConfig.enabled ? false : null,
	},
}

@Service({
	keepInstanceAfterHmr: true,
})
export class Store extends RxStore<State> {

	constructor() {
		super(initialState)
	}

}
