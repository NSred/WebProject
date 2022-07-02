const SportFacilities = {template: '<sport-facilities></sport-facilities>'}
const Registration = {template: '<register-user></register-user> '}

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/sportFacilities', component: SportFacilities
		},
		{
			path: '/register', component: Registration
		},
		/*
		{
			path: '/login', component: LogIn
		}*/
	]
});

var app = new Vue({
	router,
	el: "#app"
})