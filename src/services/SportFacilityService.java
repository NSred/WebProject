package services;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.SportFacility;
import dao.SportFacilityDao;


@Path("/sportFacilities")
public class SportFacilityService {
	
	SportFacilityDao sportFacilityDao = new SportFacilityDao();
	
	@Context
	ServletContext ctx;
	//@PostConstruct
	@SuppressWarnings("unused")
	public void init() {
		if (ctx.getAttribute("sportFacilities") == null) {
			String contextPath = ctx.getRealPath("");
			ctx.setAttribute("sportFacilities", new SportFacilityService());
		}
	}
	
	public String getContext() {
		return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
				+ File.separator);
	}
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<SportFacility> getFacilities() {
		sportFacilityDao.setBasePath(getContext());
		return sportFacilityDao.getAllToList();
	}
}
