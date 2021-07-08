
const customPlugin = {
	install: function(Vue, options) {
		//1. add global method or property
		Vue.myGlobalMethod = function () {
			alert('Global method')
		}

		Vue.myCustomProperty = 'Global property'

		//2. add global asset 
		Vue.directive('blue-color', {
			bind (el, binding) {
				el.style.color = 'blue'
			}
		})

		//3. inject some component options, mixis
		Vue.mixin({
			data() {
				return {
					custom_message: 'ASFEEEE'
				}
			},
			created() {
				console.log('custom mixin created')
			},
			methods: {
				scream() {
					alert(this.custom_message)
				}
			}
		})

		//4. add an instance method or property
		Vue.prototype.$customMethod = function () {
			alert('i am custom instance method')
		}
	}
}

export default customPlugin