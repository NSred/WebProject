package services;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Admin;
import beans.Due;
import beans.Gender;
import beans.Manager;
import beans.UserRole;
import dao.AdminDao;
import dao.DueDao;
import dto.AdminDTO;

@Path("/dues")
public class DueService  {
    DueDao dueDao = new DueDao();

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

    
    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createDue(Due due) {
    	dueDao.setBasePath(getContext());  	
    	dueDao.create(due);
    }


}