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

import beans.Gender;
import beans.Manager;
import beans.Trainer;
import beans.Training;
import beans.UserRole;
import dao.TrainerDao;
import dao.TrainingDao;
import dto.TrainerDTO;

@Path("/trainers")
public class TrainerService  {
    TrainerDao trainerDao = new TrainerDao();
    TrainingDao trainingDao = new TrainingDao();
    
    @Context
    ServletContext ctx;
    
    @SuppressWarnings("unused")
    public void init() {
        if (ctx.getAttribute("trainers") == null) {
            String contextPath = ctx.getRealPath("");
            ctx.setAttribute("trainers", new TrainerService());
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
    public ArrayList<Trainer> getAllTrainers() {
        trainerDao.setBasePath(getContext());
        return trainerDao.getAllToList();
    }
    
    @GET
	@Path("/getTrainerById/{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Trainer getTrainerById(@PathParam("userId") String userId) {
		trainerDao.setBasePath(getContext());
		return trainerDao.getById(userId);
	}
    
    @POST
	@Path("/getTrainersByTrainingIds")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ArrayList<Trainer> getTrainersByTrainingIds(ArrayList<Training> trainings) {
		trainerDao.setBasePath(getContext());
		trainingDao.setBasePath(getContext());
		ArrayList<Trainer> trainers = new ArrayList<Trainer>();
		for(Training tr : trainings) {
			Trainer t = getTrainerById(tr.getTrainerId());
			trainers.add(t);
		}
		return trainers;
	}
    
    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void createTrainer(TrainerDTO trainerDTO) {
        trainerDao.setBasePath(getContext());
        
        Trainer trainer = new Trainer();
        String[] parts = trainerDTO.getBirthdate().split("-");
        int year, day, month;
        year = Integer.parseInt(parts[0]);
        month = Integer.parseInt(parts[1]);
        day = Integer.parseInt(parts[2]);               
        
        @SuppressWarnings("deprecation")
		Date date = new Date(year - 1900, month - 1, day);
        trainer.setName(trainerDTO.getName());
        trainer.setSurname(trainerDTO.getSurname());
        trainer.setUsername(trainerDTO.getUsername());
        trainer.setPassword(trainerDTO.getPassword());
        trainer.setGender(Gender.valueOf(trainerDTO.getGender().toUpperCase()));
        trainer.setUserRole(UserRole.valueOf(trainerDTO.getUserRole()));
        trainer.setDeleted(trainerDTO.isDeleted());
        trainer.setBanned(trainerDTO.isBanned());
        trainer.setBirthdate(date);
        
        trainerDao.create(trainer);
    }


}