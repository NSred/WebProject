package services;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import beans.Admin;
import beans.Customer;
import beans.Manager;
import beans.Trainer;
import beans.User;
import beans.UserState;
import dao.AdminDao;
import dao.CustomerDao;
import dao.ManagerDao;
import dao.TrainerDao;

@Path("login")
public class LoginService   {
	CustomerDao customerDao = new CustomerDao();
	ManagerDao managerDao = new ManagerDao();
	AdminDao adminDao = new AdminDao();
	TrainerDao trainerDao = new TrainerDao();
	private User user;
	List<String> usernames;
	
	@Context
	ServletContext ctx;
	
	@SuppressWarnings("unused")
	public void init() {
		if (ctx.getAttribute("username") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("username", "");
		}
	}
	public String getContext() {
		return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
				+ File.separator);
	}
	private void setLoggedInUser(String username) {
		ctx.setAttribute("username", username);
	}
	
	@POST
	@Path("logOut")
	@Produces(MediaType.TEXT_PLAIN)
	public String userLogOut() {
		ctx.setAttribute("username", "");
		return "Log Out Successful";
	}
	@POST
	@Path("logInStatus")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean SuccesLoginIn(User user) {
		UserState loginState = customerLogIn(user);
		boolean loginStatus= false;
		if(loginState == UserState.SUCCESS) {
			loginStatus =  true;
		}
		loginState = adminLogIn(user);
		if(loginState == UserState.SUCCESS) {
			loginStatus = true;
		}
		loginState = managerLogIn(user);
		if(loginState == UserState.SUCCESS) {
			loginStatus =  true;
		}
		loginState = trainerLogIn(user);
		if(loginState == UserState.SUCCESS) {
			loginStatus = true;
		}
		return loginStatus;
		
	}
	@GET
	@Path("loggedUser")
	@Produces(MediaType.APPLICATION_JSON)
	public User getCurrentUser() {
		adminDao.setBasePath(getContext());
		customerDao.setBasePath(getContext());
		managerDao.setBasePath(getContext());
		trainerDao.setBasePath(getContext());
		User user = new User();
		String username = (String) ctx.getAttribute("username");
		/* ctx.setAttribute("username", user.getUsername()); */
		user.setUsername(username);
		User trainer = trainerDao.getById(username);
		if(trainer != null) {
			return new User(trainer.getUsername(), trainer.getPassword(), trainer.getName(),
					trainer.getSurname(), trainer.getBirthdate(), trainer.getGender(), trainer.getUserRole());
		}
		User manager = managerDao.getById(username);
		if(manager != null) {
			return new User(manager.getUsername(), manager.getPassword(), manager.getName(),
					manager.getSurname(), manager.getBirthdate(), manager.getGender(), manager.getUserRole());
		}
		User customer = customerDao.getById(username);
		if(customer != null) {
			System.out.println(customer.toString());
			if(customer instanceof Customer)
				System.out.println("yees");
			return new User(customer.getUsername(), customer.getPassword(), customer.getName(),
					customer.getSurname(), customer.getBirthdate(), customer.getGender(), customer.getUserRole());
		}
		User admin = adminDao.getById(username);
		if(admin != null) {
			return new User(admin.getUsername(), admin.getPassword(), admin.getName(),
					admin.getSurname(), admin.getBirthdate(), admin.getGender(), admin.getUserRole());
		}
		return null;
		
	}
	public UserState customerLogIn(User user) {
		UserState state = UserState.ERROR;
		customerDao.setBasePath(getContext());
		for (Customer u : customerDao.getAllToList()) {
			if (u.getUsername().equals(user.getUsername())) {
				if (u.getPassword().equals(user.getPassword())) {
					if(u.isBanned()) {
						state = UserState.BANNED;
					}
					else {
						setLoggedInUser(user.getUsername());
						state = UserState.SUCCESS;
					}
			}
		}
		}
		return state;
	}

	public UserState adminLogIn(User user) {
		adminDao.setBasePath(getContext());
		UserState state = UserState.ERROR;
		for (Admin u : adminDao.getAllToList()) {
			if (u.getUsername().equals(user.getUsername())) {
				if (u.getPassword().equals(user.getPassword())) {
					setLoggedInUser(user.getUsername());
					return UserState.SUCCESS;
			
			}
		}
		}
		return state;
	}

	public UserState managerLogIn(User user) {
		managerDao.setBasePath(getContext());
		UserState state = UserState.ERROR;
		for (Manager u : managerDao.getAllToList()) {
			if (u.getUsername().equals(user.getUsername())) {
				if (u.getPassword().equals(u.getPassword())) {
					if(u.isBanned()) {
						state =  UserState.BANNED;
					}
					else {
						setLoggedInUser(u.getUsername());
						state = UserState.SUCCESS;
					}
				}
			}
		}
		return state;
	}

	public UserState trainerLogIn(User user) {
		trainerDao.setBasePath(getContext());
		UserState state = UserState.ERROR;
		for (Trainer u : trainerDao.getAllToList()) {
			if (u.getUsername().equals(user.getUsername())) {
				if (u.getPassword().equals(user.getPassword())) {
					if(u.isBanned()) {
						state = UserState.BANNED;
					}
					else {
						setLoggedInUser(user.getUsername());
						state = UserState.SUCCESS;
					}
				}
			}
		}
		return state;
	}
	
	public String getCustomerStateString(User user) {
		UserState state  = customerLogIn(user);
		String userState = "";
		switch (state) {
		case SUCCESS:
			userState = "Success login";
			break;
		case ERROR:
			userState = "Wrong credential.Wrong username or password!";
			break;
		case BANNED:
			userState = "Your are banned!";
			break;

		default:
			break;
		}
		return userState;
	}
	public String getTrainerStateString(User user) {
		UserState state  = trainerLogIn(user);
		String userState = "";
		switch (state) {
		case SUCCESS:
			userState = "Success login";
			break;
		case ERROR:
			userState = "Wrong credential.Wrong username or password!";
			break;
		case BANNED:
			userState = "Your are banned!";
			break;

		default:
			break;
		}
		return userState;
	}
	public String getManagerStateString(User user) {
		UserState state  = managerLogIn(user);
		String userState = "";
		switch (state) {
		case SUCCESS:
			userState = "Success login";
			break;
		case ERROR:
			userState = "Wrong credential.Wrong username or password!";
			break;
		case BANNED:
			userState = "Your are banned!";
			break;

		default:
			break;
		}
		return userState;
	}
	public String getAdminStateString(User user) {
		UserState state  = adminLogIn(user);
		String userState = "";
		switch (state) {
		case SUCCESS:
			userState = "Success login";
			break;
		case ERROR:
			userState = "Wrong credential.Wrong username or password!";
			break;
		case BANNED:
			userState = "Your are banned!";
			break;

		default:
			break;
		}
		return userState;
	}	
	


}