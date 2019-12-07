Vue.component('app-child', {
	template: '<button>Click Me!</button>'
})

Vue.component('app-content', {
	template: `<div class="container">
	<p>하늘을 우러러</p>
	<p>한ㅁㄴㅇㄴㅁㅇㄴㅁ</p>
	<p>zxcxzvxzvxz</p>
	<app-child></app-child>
	</div>`
})

new Vue({
	el: '#app',
	data: {
		msg: ''
	}
})