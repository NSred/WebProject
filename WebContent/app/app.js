const HomePage = {template: '<div><navigation-bar></navigation-bar><sport-facilities></sport-facilities></div>'}
const SportFacilities = {template: '<sport-facilities></sport-facilities>'}
const Registration = {template: '<div><navigation-bar></navigation-bar><register-user></register-user></div>'}
const Login = {template: '<div><navigation-bar></navigation-bar><login-user></login-user></div>'}
const Admin = {template: '<div><admin-navigation></admin-navigation><admin-home></admin-home></div>'}
const Manager = {template: '<div><manager-navigation></manager-navigation><sport-facilities></sport-facilities></div>'}
const Trainer = {template: '<div><trainer-navigation></trainer-navigation><sport-facilities></sport-facilities></div>'}
const Customer = {template: '<div><customer-navigation></customer-navigation><customer-facilities></customer-facilities></div>'}
const AdminManagersView = {template: '<div><admin-navigation></admin-navigation><admin-managers></admin-managers></div>'}
const AdminTrainersView = {template: '<div><admin-navigation></admin-navigation><admin-trainers></admin-trainers></div>'}
const AdminCustomersView = {template: '<div><admin-navigation></admin-navigation><admin-customers></admin-customers></div>'}
const AdminUserRegistration = {template: '<div><admin-navigation></admin-navigation><admin-userRegistration></admin-userRegistration></div>'}
const AdminCreateFacility = {template: '<div><admin-navigation></admin-navigation><admin-createFacility></admin-createFacility></div>'}
const AdminHome = {template: '<div><admin-navigation></admin-navigation><sport-facilities></sport-facilities></div>'}
const ManagerFacility = {template: '<div><manager-navigation></manager-navigation><manager-facility></manager-facility></div>'}
const ManagerCreateTraining = {template: '<div><manager-navigation></manager-navigation><manager-training></manager-training></div>'}
const ManagerTrainingsView = {template: '<div><manager-navigation></manager-navigation><all-trainings></all-trainings></div>'}
const AdminProfile = {template: '<div><admin-navigation></admin-navigation><admin-profile></admin-profile></div>'}
const ManagerProfile = {template: '<div><manager-navigation></manager-navigation><manager-profile></manager-profile></div>'}
const TrainerProfile = {template: '<div><trainer-navigation></trainer-navigation><trainer-profile></trainer-profile></div>'}
const CustomerProfile = {template: '<div><customer-navigation></customer-navigation><customer-profile></customer-profile></div>'}
const ManagerEditTraining = {template: '<div><manager-navigation></manager-navigation><edit-training></edit-training></div>'}
const ManagerViewTrainers = {template: '<div><manager-navigation></manager-navigation><manager-trainers></manager-trainers></div>'}
const TrainerTrainingsView = {template: '<div><trainer-navigation></trainer-navigation><trainer-trainings></trainer-trainings></div>'}
const TrainerPersonalTrainingsView = {template: '<div><trainer-navigation></trainer-navigation><trainer-personal></trainer-personal></div>'}
const TrainerGroupTrainingsView = {template: '<div><trainer-navigation></trainer-navigation><trainer-group></trainer-group></div>'}
const CustomerDues = {template: '<div><customer-navigation></customer-navigation><customer-dues></customer-dues></div> '}
const CustomerFacilityDetailsView = {template: '<div><customer-navigation></customer-navigation><customer-details-view></customer-details-view></div> '}
const AdminFacilityDetailsView = {template: '<div><admin-navigation></admin-navigation><details-view></details-view></div> '}
const TrainerFacilityDetailsView = {template: '<div><trainer-navigation></trainer-navigation><details-view></details-view></div> '}
const ManagerFacilityDetailsView = {template: '<div><manager-navigation></manager-navigation><details-view></details-view></div> '}
const CustomerTrainingsView = {template: '<div><customer-navigation></customer-navigation><customer-trainings></customer-trainings></div> '}
const NotLoggedFacilityDetailsView = {template: '<div><navigation-bar></navigation-bar><details-view></details-view></div> '}

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
			path: '/admin', component: AdminHome
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
		},
		{
			path: '/admin/createFacility', component: AdminCreateFacility
		},
		{
			path: '/admin/usersView', component: Admin
		},
		{
			path: '/manager/facility', component: ManagerFacility
		},
		{
			path: '/manager/createTraining', component: ManagerCreateTraining
		},
		{
			path: '/manager/trainingsView', component: ManagerTrainingsView
		},
		{
			path: '/admin/myProfile', component: AdminProfile
		},
		{
			path: '/manager/myProfile', component: ManagerProfile
		},
		{
			path: '/trainer/myProfile', component: TrainerProfile
		},
		{
			path: '/customer/myProfile', component: CustomerProfile
		},
		{
			path: '/manager/editTraining/:id?', name : 'editTraining',  component: ManagerEditTraining
		},
		{
			path: '/manager/viewTrainers' , component: ManagerViewTrainers
		},
		{
			path: '/trainer/trainingsView' , component: TrainerTrainingsView
		},
		{
			path: '/trainer/personalTrainingsView' , component: TrainerPersonalTrainingsView
		},
		{
			path: '/trainer/groupTrainigsView' , component: TrainerGroupTrainingsView
		},
		{
			path: '/customer/dues' , component: CustomerDues
		},
		{
			path: '/admin/detailsView/:id?', name : 'AdminDetailsView', component: AdminFacilityDetailsView
		},
		{
			path: '/trainer/detailsView/:id?', name : 'TrainerDetailsView', component: TrainerFacilityDetailsView
		},
		{
			path: '/manager/detailsView/:id?', name : 'ManagerDetailsView', component: ManagerFacilityDetailsView
		},
		{
			path: '/customer/detailsView/:id?', name : 'CustomerDetailsView', component: CustomerFacilityDetailsView
		},
		{
			path: '/customer/trainingsView', component: CustomerTrainingsView
		},
		{
			path: '/detailsView', name : 'NotLoggedDetailsView',component: NotLoggedFacilityDetailsView
		}
	]
});

var app = new Vue({
	router,
	el: "#app"
})