package services;

import java.io.File;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Manager;
import dao.ManagerDao;

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
	@Path("create")	
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createManger(Manager manager) {
		managerDao.setBasePath(getContext());
		managerDao.create(manager);
	}
}
