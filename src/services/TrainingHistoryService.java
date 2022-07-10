package services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.Duration;
import java.time.temporal.TemporalUnit;
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

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import beans.Trainer;
import beans.Training;
import beans.TrainingHistory;
import dao.TrainingDao;
import dao.TrainingHistoryDao;
import dto.TrainingDTO;
import dto.TrainingHistoryDTO;


@Path("/trainingsHistory")
public class TrainingHistoryService {

	TrainingHistoryDao trainingHistoryDao = new TrainingHistoryDao();
    
    @Context
    ServletContext ctx;
    
    @SuppressWarnings("unused")
    public void init() {
        if (ctx.getAttribute("trainingsHistory") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("trainingsHistory", new TrainingHistoryService());
        }
    }
    
    public String getContext() {
        return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
                + File.separator);
    }
    
    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<TrainingHistory> getAllTrainingHistory() {
    	trainingHistoryDao.setBasePath(getContext());
        return trainingHistoryDao.getAllToList();
    }
 
    
    @GET
	@Path("/getTrainingHistoryById/{trainingHistoryId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public TrainingHistory getTrainingHistoryById(@PathParam("trainingHistoryId") String trainingHistoryId) {
		trainingHistoryDao.setBasePath(getContext());
		return trainingHistoryDao.getById(trainingHistoryId);
	}
    
    @GET
    @Path("/getTrainingHistoryByTrainingId/{trainingId}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<TrainingHistory> getTrainingHistoryByTrainingId(@PathParam("trainingId") String trainingId) {
    	trainingHistoryDao.setBasePath(getContext());
    	
    	ArrayList<TrainingHistory> treningHistoryToFill = new ArrayList<TrainingHistory>();
    	ArrayList<TrainingHistory> trainingHistory = trainingHistoryDao.getAllToList();
    	for(TrainingHistory th : trainingHistory) {
    		if(th.getTrainingId().equals(trainingId)) {
    			treningHistoryToFill.add(th);
    		}
    	}
        return treningHistoryToFill;
    }     

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createTraining(TrainingHistoryDTO trainingHistoryDTO) {
    	trainingHistoryDao.setBasePath(getContext());
        
    	TrainingHistory trainingHistory = new TrainingHistory();
    	
    	trainingHistory.setCustomerId(trainingHistoryDTO.getCustomerId());
    	trainingHistory.setDeleted(trainingHistoryDTO.isDeleted());
    	trainingHistory.setId(trainingHistoryDTO.getId());
    	trainingHistory.setTrainerId(trainingHistoryDTO.getTrainerId());
    	trainingHistory.setTrainingId(trainingHistoryDTO.getTrainingId());
    	
    	String[] parts = trainingHistoryDTO.getTrainingDate().split("-");
        int year, day, month;
        year = Integer.parseInt(parts[0]);
        month = Integer.parseInt(parts[1]);
        day = Integer.parseInt(parts[2]);               
        
        @SuppressWarnings("deprecation")
		Date date = new Date(year - 1900, month - 1, day);
        trainingHistory.setTrainingDate(date);
        
        String[] parts1 = trainingHistoryDTO.getDateAndTimeOfSign().split("-");
        int year1, day1, month1;
        year1 = Integer.parseInt(parts1[0]);
        month1 = Integer.parseInt(parts1[1]);
        day1 = Integer.parseInt(parts1[2]);               
        
        @SuppressWarnings("deprecation")
		Date date1 = new Date(year1 - 1900, month1 - 1, day1);
        trainingHistory.setDateAndTimeOfSign(date1);
    	
		trainingHistoryDao.create(trainingHistory);
    } 
}
