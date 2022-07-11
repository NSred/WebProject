Vue.component("admin-managers", {
	data: function(){
		return{
			registeredManagers: null,
		}
	},
	
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
	    <h1 class="heading"> Registered Managers </h1>
	    
	    <h2 class ="heading"> Choose type of user to show</h2>
	    <button class="btn">Managers</button>
	    <button class="btn" v-on:click="ShowTrainers()">Trainers</button>
	    <button class="btn" v-on:click="ShowCustomers()">Customers</button>
	
	    <div class="box-container">
	
	        <div class="box" v-for="ru in registeredManagers">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <h3>{{ru.name}}</h3>
	            <div>
	            	Type: {{ru.surname}}
	            </div>
	            <h4>{{ru.username}}</h4>
	            <span>{{ru.userRole}}</span>
	            <br></br>
	            <span>{{ConvertBanned(ru)}}</span>
	            <br></br>
	            <div class="btn" v-on:click="deleteManager(ru)">Delete</div>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	`,
	methods : {
		ConvertBanned: function(user) {
			
			if(user.banned===true)
				return "Banovan";
				else
				return "Nije banovan";
		},
		ShowTrainers : function(){
			router.push({ path : '/admin/trainersView'});
		},
		ShowCustomers : function(){
			router.push({ path : '/admin/customersView'});
		},
		deleteManager(m){
			axios
				.delete('rest/managers/' + m.username)
				.then(response => {toast("USPESO OBRISAN MANAGER")
				
					axios
			          .get('rest/managers/')
			          .then(response => (this.registeredManagers = response.data))
				})
				.catch(error => alert(error.message + "GRESKA U BRISANJU MANAGERA"))
		}
	},
	mounted () {
        axios
          .get('rest/managers/')
          .then(response => (this.registeredManagers = response.data))
    },
});