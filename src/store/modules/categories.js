import axios from 'axios'

export default {
	namespaced: true,
	state: {
		items: []
	},
	actions: {
		fetchCategories ({state, commit}) {
			return axios.get('/api/v1/categories')
			.then(response => {
				const categories = response.data
				commit('setItems', {resource: 'categories', items: categories}, {root: true})
				return state.items
			})
		},
	}
}