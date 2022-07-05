package services;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Gender;
import beans.Manager;
import beans.UserRole;
import dao.ManagerDao;
import dto.ManagerDTO;

@Path("managers")
public class ManagerService {
	ManagerDao managerDao = new ManagerDao();
	
	@Context
	ServletContext ctx;
	@SuppressWarnings("unused")
	public void init() {
		if (ctx.getAttribute("managers") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("managers", new ManagerService());
		}
	}
	public String getContext() {
		return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
				+ File.separator);
	}
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Manager> getAllMangers() {
		managerDao.setBasePath(getContext());
//
//		ArrayList<Customer> customers = new ArrayList<Customer>();
//
//		for (Customer c : customerDao.getAllToList())
//			customers.add(c);
//
//		System.out.println("Found " + customers.size() + " customers.");

		return managerDao.getAllToList();
	}
	@POST
	@Path("/")	
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createManger(ManagerDTO managerDTO) {
		managerDao.setBasePath(getContext());
		
		Manager manager = new Manager();
		int year, day, month;
	    String[] parts = managerDTO.getBirthdate().split("-");
	    year = Integer.parseInt(parts[0]);
	    month = Integer.parseInt(parts[1]);
	    day = Integer.parseInt(parts[2]);               
	
	    @SuppressWarnings("deprecation")
	    Date date = new Date(year - 1900, month - 1, day);
	    manager.setName(managerDTO.getName());
	    manager.setSurname(managerDTO.getSurname());
	    manager.setUsername(managerDTO.getUsername());
	    manager.setPassword(managerDTO.getPassword());
	    manager.setGender(Gender.valueOf(managerDTO.getGender().toUpperCase()));
	    manager.setUserRole(UserRole.valueOf(managerDTO.getUserRole()));
	    manager.setDeleted(managerDTO.isDeleted());
	    manager.setBanned(managerDTO.isBanned());
	    manager.setBirthdate(date);
	    manager.setSportFacilityId(managerDTO.getSportFacilityId());
	    
	    managerDao.create(manager);
	}
}
