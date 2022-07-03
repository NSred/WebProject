const HomePage = {template: '<home-page></home-page> '}
const SportFacilities = {template: '<sport-facilities></sport-facilities>'}
const Registration = {template: '<register-user></register-user> '}
const Login = {template: '<login-user></login-user> '}

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