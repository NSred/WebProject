package services;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Admin;
import beans.Customer;
import beans.Due;
import beans.Gender;
import beans.Manager;
import beans.Trainer;
import beans.Training;
import beans.UserRole;
import dao.AdminDao;
import dao.CustomerDao;
import dao.DueDao;
import dto.AdminDTO;
import dto.DueDTO;

@Path("/dues")
public class DueService  {
    DueDao dueDao = new DueDao();
    CustomerDao customerDao = new CustomerDao();

    @Context
    ServletContext ctx;
    
    @SuppressWarnings("unused")
    public void init() {
        if (ctx.getAttribute("dues") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("dues", new DueService());
        }
    }
    
    public String getContext() {
        return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
                + File.separator);
    }
    
    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Due> getAllDues() {
    	dueDao.setBasePath(getContext());
        return dueDao.getAllToList();
    }
    
    @GET
    @Path("/getDueById/{dueId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Due getDueById(@PathParam("dueId") String dueId) {
    	dueDao.setBasePath(getContext());
        return dueDao.getById(dueId);
    }
    
    @GET
    @Path("/getDueByCustomerId/{customerId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Due getDueByCustomerId(@PathParam("customerId") String customerId) {
    	dueDao.setBasePath(getContext());
    	
    	Due due = null;
    	ArrayList<Due> dues = dueDao.getAllToList();
    	for(Due d : dues) {
    		if(d.getCustomerId().equals(customerId)) {
    			due = d;
    			break;
    		}
    	}
        return due;
    } 

    
    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createDue(DueDTO dueDTO) {
    	dueDao.setBasePath(getContext());
		
		 Due due = new Due();
		 
		 due.setCustomerId(dueDTO.getCustomerId());
		 due.setId(dueDTO.getId());
		 due.setNumberOfSession(dueDTO.getNumberOfSession());
		 due.setPrice(dueDTO.getPrice());
		 due.setStatus(due.isStatus());
		 due.setType(dueDTO.getType());
		 
		 String[] parts = dueDTO.getPaymentDate().split("-");
		 int year, day, month;
		 year = Integer.parseInt(parts[0]);
		 month = Integer.parseInt(parts[1]);
		 day = Integer.parseInt(parts[2]);               
        	
		 @SuppressWarnings("deprecation")
		 Date date = new Date(year - 1900, month - 1, day);
		 due.setPaymentDate(date);
		 
		 String[] parts1 = dueDTO.getDateAndTimeOfValidity().split("-");
		 int year1, day1, month1;
		 year1 = Integer.parseInt(parts1[0]);
		 month1 = Integer.parseInt(parts1[1]);
		 day1 = Integer.parseInt(parts1[2]);               
        	
		 @SuppressWarnings("deprecation")
		 Date date1 = new Date(year1 - 1900, month1 - 1, day1);
		 due.setDateAndTimeOfValidity(date1);
		 
		 
    	dueDao.create(due);   	
    }
    
    @DELETE
	@Path("/{dueByCustomerId}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
	public void deleteDue(@PathParam("dueByCustomerId") String dueByCustomerId) {
		dueDao.setBasePath(getContext());
		
		Due due = getDueByCustomerId(dueByCustomerId);
		dueDao.delete(due.getId());
	}
}