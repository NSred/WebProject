Vue.component("customer-dues", {
	data: function(){
		return{
			dues: null,
			paymentDate : "",
			validityDate : "",
			user : {},
			customer : {},
			exists : false,
			predefinedDues : [],
			dueByCustomer : {},
			customerBirth : ""
		}
	},
	
	template: `
	
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Complete Responsive Food Website Design Tutorial</title>
		
		    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
		
		    <!-- font awesome cdn link  -->
		
		    <!-- custom css file link  -->
		    <link rel="stylesheet" href="css/dataView.css">
		
		</head>
		<body>
	<section class="dishes" id="dishes">
				
	    <h3 class="sub-heading"> Clean Fit </h3>
	    <h1 class="heading"> {{dueByCustomer.customerId}} 's memberships </h1>
	    
	    
	    <div class="membership-box">
	    	<h2 class="membership-heading">Your membership</h2>
	    	<h2 class="membership-sub-heading">Type: {{dueByCustomer.type}}</h2>
	    	<h2 class="membership-sub-heading">Sessions: {{dueByCustomer.numberOfSession}}</h2>
	    	<h2 class="membership-sub-heading">Expire date: {{dueByCustomer.dateAndTimeOfValidity|dateFormat('DD-MM-YYYY')}}</h2>
	    </div>
	
	    <div class="box-container">
	
	        <div class="box" v-for="due in predefinedDues">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <h3>{{due.type}}</h3>	           
	            <span>{{due.price}} din</span>
	            <h3>
	            	Sessions: {{due.numberOfSession}}
	            </h3>
	            <br></br>
	            <div><a href="#" v-on:click="createMembership(due)" class="btn">Subcribe</a></div>
	        </div>
	        
	    </div>
	
	</section>			
	</body>
	</html>
	
	
	
	`,
	methods : {
		createMembership : function(d){
			

      		this.paymentDate = new Date()
      		let dt = new Date()
      		let todayDate = dt.getTime()
      		  		
      		this.paymentDate = this.paymentDate.toLocaleDateString('en-CA')
      		d.paymentDate = this.paymentDate
      		
      		this.validityDate = todayDate + (d.numberOfSession * 86400000)
      		this.validityDate = new Date(this.validityDate)
      		this.validityDate = this.validityDate.toLocaleDateString('en-CA')
      		d.dateAndTimeOfValidity = this.validityDate
	          		
			var m = {id : Math.random().toString(36).slice(-10), type : d.type, paymentDate : d.paymentDate, dateAndTimeOfValidity : d.dateAndTimeOfValidity, price : d.price, customerId : this.customer.username,
					status : true, numberOfSession : d.numberOfSession}
					
			for(let d of this.dues){
				if(d.customerId === m.customerId){
					m.id = d.id
					
					axios
						.post('rest/dues', m)
						.then(response => 
							{
								toast("Uspesno UPDEJTOVANA clanarina")
								axios
									.get('rest/dues/getDueByCustomerId/' + this.customer.username)
									.then(response => this.dueByCustomer = response.data)
									
								this.paymentDate = new Date()
					      		let dt = new Date()
					      		let todayDate = dt.getTime()
					      		  		
					      		this.paymentDate = this.paymentDate.toLocaleDateString('en-CA')
					      		this.dueByCustomer.paymentDate = this.paymentDate
					      		
					      		this.validityDate = todayDate + (m.numberOfSession * 86400000)
					      		this.validityDate = new Date(this.validityDate)
					      		this.validityDate = this.validityDate.toLocaleDateString('en-CA')
					      		this.dueByCustomer.dateAndTimeOfValidity = this.validityDate
					      		
					      		this.dueByCustomer.type = m.type
					      		this.dueByCustomer.status = m.status
					      		this.dueByCustomer.numberOfSession = m.numberOfSession
					      		this.dueByCustomer.price = m.price

									
								this.customer.due = this.dueByCustomer
								
								this.customerBirth = this.customer.birthdate
					      		this.customerBirth = new Date(this.customerBirth)
					      		this.customerBirth = this.customerBirth.toLocaleDateString('en-CA')
					      		this.customer.birthdate = this.customerBirth
      		
								axios
									.post('rest/customers', this.customer)
									.then(response => toast("USPESNO AZURIRAN KASTOMER"))
									.catch(error => {
											alert(error.message + " GRESKA U UPDEJTOVANJU KASTOMERA");
							})
															
							})
						.catch(error => {
								alert(error.message + " GRESKA U UPDEJTOVANJU CLANARINE");
							})
					this.exists = true
					break
				}	
					
			}
			
			if(this.exists === false){
					axios
						.post('rest/dues', m)
						.then(response => 
						{
							toast("Uspesno kreirana clanarina")
								axios
							       .get('rest/dues/')
							       .then(response => (this.dues = response.data))
							       console.log(this.dues)
							       
							    axios
									.get('rest/dues/getDueByCustomerId/' + this.customer.username)
									.then(response => this.dueByCustomer = response.data)
									console.log(this.dueByCustomer)
									
									this.paymentDate = new Date()
						      		let dt = new Date()
						      		let todayDate = dt.getTime()
						      		  		
						      		this.paymentDate = this.paymentDate.toLocaleDateString('en-CA')
						      		this.dueByCustomer.paymentDate = this.paymentDate
						      		
						      		this.validityDate = todayDate + (m.numberOfSession * 86400000)
						      		this.validityDate = new Date(this.validityDate)
						      		this.validityDate = this.validityDate.toLocaleDateString('en-CA')
						      		this.dueByCustomer.dateAndTimeOfValidity = this.validityDate
						      		
						      		this.dueByCustomer.type = m.type
						      		this.dueByCustomer.status = m.status
						      		this.dueByCustomer.numberOfSession = m.numberOfSession
						      		this.dueByCustomer.price = m.price
									
									this.customer.due = this.dueByCustomer
									
									this.customerBirth = this.customer.birthdate
						      		this.customerBirth = new Date(this.customerBirth)
						      		this.customerBirth = this.customerBirth.toLocaleDateString('en-CA')
						      		this.customer.birthdate = this.customerBirth
								axios
									.post('rest/customers', this.customer)
									.then(response => toast("USPESNO AZURIRAN KASTOMER"))
									.catch(error => {
											
											alert(error.message + " GRESKA U UPDEJTOVANJU KASTOMERA")
											
											});																		
							})
						.catch(error => {
								alert(error.message + " GRESKA U KREIRANJU CLANARINE");
							})
			
			}
		}
	},
	filters : {
		dateFormat : function(value, format){
			var parsed = moment(value);
			return parsed.format(format);
		}
	},
	mounted () {          	
          	axios
	          .get('rest/login/loggedUser')
	          .then(response => {(this.user = response.data)
	          		
	          	axios
	          		.get('rest/customers/getCustomerById/' + this.user.username, this.user)
	          		.then(response => {(this.customer = response.data)
	          		
	          			axios
					       .get('rest/dues/')
					       .then(response => {(this.dues = response.data)
					       for(let d of this.dues){
								if(d.customerId === "")
									this.predefinedDues.push(d)
						   }
						
						axios
							.get('rest/dues/getDueByCustomerId/' + this.customer.username)
							.then(response => this.dueByCustomer = response.data)
							console.log(this.dueByCustomer)
	    		})
	    	})

          })
    },
});