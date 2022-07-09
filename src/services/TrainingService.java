package services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.Duration;
import java.time.temporal.TemporalUnit;
import java.util.ArrayList;

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

import dao.TrainingDao;
import dto.TrainingDTO;


@Path("/trainings")
public class TrainingService {

	TrainingDao trainingDao = new TrainingDao();
    
    @Context
    ServletContext ctx;
    
    @SuppressWarnings("unused")
    public void init() {
        if (ctx.getAttribute("trainings") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("trainings", new TrainingService());
        }
    }
    
    public String getContext() {
        return (ctx.getRealPath("") + "WEB-INF" + File.separator + "classes" + File.separator + "json"
                + File.separator);
    }
    
    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Training> getAllTrainings() {
    	trainingDao.setBasePath(getContext());
        return trainingDao.getAllToList();
    }
    
    @GET
    @Path("/getTrainingsByFacilityId/{sportFacilityId}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Training> getTrainingsByFacilityId(@PathParam("sportFacilityId") String sportFacilityId) {
    	trainingDao.setBasePath(getContext());
    	
    	ArrayList<Training> treningsToFill = new ArrayList<Training>();
    	ArrayList<Training> trainings = trainingDao.getAllToList();
    	for(Training t : trainings) {
    		if(t.getSportFacilityId().equals(sportFacilityId)) {
    			treningsToFill.add(t);
    		}
    	}
        return treningsToFill;
    } 
    
    @GET
    @Path("/getTrainingsByTrainerId/{trainerId}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Training> getTrainingsByTrainerId(@PathParam("trainerId") String trainerId) {
    	trainingDao.setBasePath(getContext());
    	
    	ArrayList<Training> treningsToFill = new ArrayList<Training>();
    	ArrayList<Training> trainings = trainingDao.getAllToList();
    	for(Training t : trainings) {
    		if(t.getTrainerId().equals(trainerId)) {
    			treningsToFill.add(t);
    		}
    	}
        return treningsToFill;
    }  
    
    @GET
	@Path("/getTrainingById/{trainingId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Training getTrainingById(@PathParam("trainingId") String trainingId) {
		trainingDao.setBasePath(getContext());
		return trainingDao.getById(trainingId);
	}

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createTraining(TrainingDTO trainingDTO) {
    	trainingDao.setBasePath(getContext());
    	
    	Training training = new Training();
    	training.setDeleted(trainingDTO.isDeleted());
    	training.setDescription(trainingDTO.getDescription());
    	training.setImageName(trainingDTO.getImageName());
    	training.setName(trainingDTO.getName());
    	training.setSportFacilityId(trainingDTO.getSportFacilityId());
    	training.setTrainerId(trainingDTO.getTrainerId());
    	training.setType(trainingDTO.getType());
		training.setDurationInMinutes(Integer.parseInt(trainingDTO.getDurationInMinutes()));
        
    	trainingDao.create(training);
    }
    
	
	 /* @POST	  
	  @Path("/uploadImage")	 
	  @Consumes(MediaType.MULTIPART_FORM_DATA) public String
	  uploadFile(@FormDataParam("file") InputStream uploadedInputStream, @FormDataParam("file") FormDataContentDisposition fileDetail) {
 
		  String imageName = fileDetail.getName(); System.out.println(imageName);
		  //saveToDisk(uploadedInputStream, imageName);
	  
		  return imageName;
	  }
	  
	 /* private void saveToDisk(InputStream uploadedInputStream, String imageName) {
	  
		  String uploadedFileLocation = ctx.getRealPath("") + imageName;
		  try {
		  OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
		  int read = 0;
		  byte[] bytes = new byte[1024];
		  
		  out = new FileOutputStream(new File(uploadedFileLocation));
		  while((read = uploadedInputStream.read(bytes)) != -1) {
			  out.write(bytes, 0, read); 
			  }
		  
		  out.flush();
		  out.close();
		  } catch(IOException e) {
			  e.printStackTrace();
			  }
		  
		  }	 */
}
