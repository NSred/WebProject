package dto;

import java.time.Duration;

public class TrainingDTO {

	private String name;
	private String type;
	private String sportFacilityId;
	private String durationInMinutes;
	private String trainerId;
	private String description;
	private boolean deleted;
	private String imageName;
	
	public TrainingDTO() {}

	public TrainingDTO(String name, String type, String sportFacilityId, String durationInMinutes, String trainerId,
			String description, boolean deleted, String imageName) {
		super();
		this.name = name;
		this.type = type;
		this.sportFacilityId = sportFacilityId;
		this.durationInMinutes = durationInMinutes;
		this.trainerId = trainerId;
		this.description = description;
		this.deleted = deleted;
		this.imageName = imageName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSportFacilityId() {
		return sportFacilityId;
	}

	public void setSportFacilityId(String sportFacilityId) {
		this.sportFacilityId = sportFacilityId;
	}

	public String getDurationInMinutes() {
		return durationInMinutes;
	}

	public void setDurationInMinutes(String durationInMinutes) {
		this.durationInMinutes = durationInMinutes;
	}

	public String getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(String trainerId) {
		this.trainerId = trainerId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
}
