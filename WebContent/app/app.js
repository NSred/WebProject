const HomePage = {template: '<div> <navigation-bar></navigation-bar><home-page></home-page></div>'}
const SportFacilities = {template: '<sport-facilities></sport-facilities>'}
const Registration = {template: '<div> <navigation-bar></navigation-bar><register-user></register-user></div>'}
const Login = {template: '<div> <navigation-bar></navigation-bar><login-user></login-user></div>'}

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/', component: HomePage
		},
		{
			path: '/sportFacilities', component: SportFacilities
		},
		{
			path: '/register', component: Registration
		},
		{
			path: '/login', component: Login
		}
	]
});

var app = new Vue({
	router,
	el: "#app"
})