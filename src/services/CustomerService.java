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

import beans.Customer;
import dao.CustomerDao;

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
    public void createCustomer(Customer customer) {
        customerDao.setBasePath(getContext());
        customerDao.create(customer);
    }
}