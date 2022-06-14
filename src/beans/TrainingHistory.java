package beans;

import java.util.Date;

public class TrainingHistory {
	private Date dateAndTimeOfSign;
	private String trainingId;
	private String customerId;
	private String trainerId;
	
	public TrainingHistory(Date dateAndTime, String trainingId, String customerId, String trainerId) {
		super();
		this.dateAndTimeOfSign = dateAndTime;
		this.trainingId = trainingId;
		this.customerId = customerId;
		this.trainerId = trainerId;
	}
	public Date getDateAndTimeOfSign() {
		return dateAndTimeOfSign;
	}
	public void setDateAndOfSign(Date dateAndTime) {
		this.dateAndTimeOfSign = dateAndTime;
	}
	public String getTrainingId() {
		return trainingId;
	}
	public void setTrainingId(String trainingId) {
		this.trainingId = trainingId;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(String trainerId) {
		this.trainerId = trainerId;
	}
	
	

}
