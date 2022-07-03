Vue.component("home-page", {
	template: `
	<div>
		<h1> HOME PAGE </h1>
		<button @click="$router.push('register')">Registration</button>
	</div>
	`,
});
