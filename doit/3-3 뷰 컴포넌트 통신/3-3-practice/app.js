Vue.component('sibling-component', {
	props: ['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

Vue.component('child-component', {
	props: ['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue! passed from Parent Component',
		anotherMessage: 'anotherMesssagegegegeg'
	}
});