const HomePage = {template: '<div><navigation-bar></navigation-bar><sport-facilities></sport-facilities></div>'}
const SportFacilities = {template: '<sport-facilities></sport-facilities>'}
const Registration = {template: '<div><navigation-bar></navigation-bar><register-user></register-user></div>'}
const Login = {template: '<div><navigation-bar></navigation-bar><login-user></login-user></div>'}
const Admin = {template: '<div><admin-navigation></admin-navigation><admin-home></admin-home></div>'}
const Manager = {template: '<div><manager-navigation></manager-navigation><sport-facilities></sport-facilities></div>'}
const Trainer = {template: '<div><trainer-navigation></trainer-navigation><sport-facilities></sport-facilities></div>'}
const Customer = {template: '<div><customer-navigation></customer-navigation><sport-facilities></sport-facilities></div>'}
const AdminManagersView = {template: '<div><admin-navigation></admin-navigation><admin-managers></admin-managers></div>'}
const AdminTrainersView = {template: '<div><admin-navigation></admin-navigation><admin-trainers></admin-trainers></div>'}
const AdminCustomersView = {template: '<div><admin-navigation></admin-navigation><admin-customers></admin-customers></div>'}
const AdminUserRegistration = {template: '<div><admin-navigation></admin-navigation><admin-userRegistration></admin-userRegistration></div>'}

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
		},
		{
			path: '/admin', component: Admin
		},
		{
			path: '/manager', component: Manager
		},
		{
			path: '/trainer', component: Trainer
		},
		{
			path: '/customer', component: Customer
		},
		{
			path: '/admin/managersView', component: AdminManagersView
		},
		{
			path: '/admin/trainersView', component: AdminTrainersView
		},
		{
			path: '/admin/customersView', component: AdminCustomersView
		},
		{
			path: '/admin/userRegistration', component: AdminUserRegistration
		}
	]
});

var app = new Vue({
	router,
	el: "#app"
})