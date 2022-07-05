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

import beans.Customer;
import beans.Gender;
import beans.Manager;
import beans.UserRole;
import dao.CustomerDao;
import dto.CustomerDTO;

@Path("/customers")
public class CustomerService {
    CustomerDao customerDao = new CustomerDao();

    @Context
    ServletContext ctx;
    
    @SuppressWarnings("unused")
    public void init() {
        if (ctx.getAttribute("customers") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("customers", new CustomerService());
        }
    }
    public String getContext() {
    	System.out.println(ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
                + File.separator);
        return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
                + File.separator);
    }
    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Customer> getAllCustomers() {
        customerDao.setBasePath(getContext());
        return customerDao.getAllToList();
    }
    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createCustomer(CustomerDTO customerDTO) {
        customerDao.setBasePath(getContext());
        
        Customer customer = new Customer();
		int year, day, month;
	    String[] parts = customerDTO.getBirthdate().split("-");
	    year = Integer.parseInt(parts[0]);
	    month = Integer.parseInt(parts[1]);
	    day = Integer.parseInt(parts[2]);               
	
	    @SuppressWarnings("deprecation")
	    Date date = new Date(year - 1900, month - 1, day);
	    customer.setName(customerDTO.getName());
	    customer.setSurname(customerDTO.getSurname());
	    customer.setUsername(customerDTO.getUsername());
	    customer.setPassword(customerDTO.getPassword());
	    customer.setGender(Gender.valueOf(customerDTO.getGender().toUpperCase()));
	    customer.setUserRole(UserRole.valueOf(customerDTO.getUserRole()));
	    customer.setDeleted(customerDTO.isDeleted());
	    customer.setBanned(customerDTO.isBanned());
	    customer.setBirthdate(date);
	    customer.setCollectedPoints(customerDTO.getCollectedPoints());
	    customer.setCustomerType(customerDTO.getCustomerType());
	    customer.setDue(customerDTO.getDue());
	    customer.setVisitedFacilities(customerDTO.getVisitedFacilities());
	    
        customerDao.create(customer);
    }
}