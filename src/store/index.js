import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import categories from './modules/categories'
import threads from './modules/threads'
import stats from './modules/stats'
import auth from './modules/auth'
import meta from './modules/meta'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		meetups, 
		categories, 
		threads,
		stats,
		auth,
		meta
	},
	// Simple functions to mutate state 
	mutations: {
		setItems (state, {resource, items}) {
			state[resource].items = items
		},
		setItem (state, {resource, item}) {
			state[resource].item = item
		},
		addItemToArray(state, {item, index, resource}) {
			Vue.set(state[resource].items, index, item)
		}
	}
})