Vue.component("admin-home", {	
	template: `
	
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>ADMIN</title>
		
		    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
		
		    <!-- font awesome cdn link  -->
		
		    <!-- custom css file link  -->
		    <link rel="stylesheet" href="css/dataView.css">
		
		</head>
		<body>
	<section class="dishes" id="dishes">
	
	    <h3 class="sub-heading"> Clean Fit </h3>
	    <h1 class="heading"> Registered Users </h1>
	    
	    <h2 class ="heading"> Choose type of user to show</h2>
	    <button class="btn" v-on:click="ShowManagers()">Managers</button>
	    <button class="btn" v-on:click="ShowTrainers()">Trainers</button>
	    <button class="btn" v-on:click="ShowCustomers()">Customers</button>
	
	</section>	
		
		</body>
	</html>
	
	`,
	methods : {
		ShowManagers : function(){
			router.push({ path : '/admin/managersView'});
		},
		ShowTrainers : function(){
			router.push({ path : '/admin/trainersView'});
		},
		ShowCustomers : function(){
			router.push({ path : '/admin/customersView'});
		},
	}
});