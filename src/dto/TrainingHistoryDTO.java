package dto;

import java.util.Date;

public class TrainingHistoryDTO {

	private String id;
	private String trainingDate;
	private String dateAndTimeOfSign;
	private String trainingId;
	private String customerId;
	private String trainerId;
	private boolean deleted;
	
	public TrainingHistoryDTO() {}

	public TrainingHistoryDTO(String id, String trainingDate, String dateAndTimeOfSign, String trainingId,
			String customerId, String trainerId, boolean deleted) {
		super();
		this.id = id;
		this.trainingDate = trainingDate;
		this.dateAndTimeOfSign = dateAndTimeOfSign;
		this.trainingId = trainingId;
		this.customerId = customerId;
		this.trainerId = trainerId;
		this.deleted = deleted;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTrainingDate() {
		return trainingDate;
	}

	public void setTrainingDate(String trainingDate) {
		this.trainingDate = trainingDate;
	}

	public String getDateAndTimeOfSign() {
		return dateAndTimeOfSign;
	}

	public void setDateAndTimeOfSign(String dateAndTimeOfSign) {
		this.dateAndTimeOfSign = dateAndTimeOfSign;
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

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	
}
