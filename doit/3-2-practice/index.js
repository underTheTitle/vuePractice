// 전역 컴포넌트
Vue.component('todo-footer', {
	template: '<p>This is another global child component</p>'
});

const app = new Vue({
	el: '#app',
	data: {
		message: 'This is a parent component'
	},
	// 지역 컴포넌트
	components: {
		'todo-list': {
			template: '<p>This is another local child component</p>'
		}
	}
});
