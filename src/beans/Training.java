package beans;

import java.time.Duration;

public class Training {
	private String name;
	private String type;
	private String sportFacilityId;
	private int durationInMinutes;
	private String trainerId;
	private String description;
	private boolean deleted;
	private String imageName;
	
	public Training() {}
	
	public Training(String name, String type, String sportFacilityId, int durationInMinutes, String trainerId,
			String description, String imageName) {
		super();
		this.name = name;
		this.type = type;
		this.sportFacilityId = sportFacilityId;
		this.durationInMinutes = durationInMinutes;
		this.trainerId = trainerId;
		this.description = description;
		this.deleted = false;
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
	public int getDurationInMinutes() {
		return durationInMinutes;
	}
	public void setDurationInMinutes(int durationInMinutes) {
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
	public void setImageName(String ImageName) {
		this.imageName = ImageName;
	}
	@Override
	public String toString() {
		return "Training [name=" + name + ", type=" + type + ", sportFacilityId=" + sportFacilityId + ", duration="
				+ durationInMinutes + ", trainerId=" + trainerId + ", description=" + description + ", deleted=" + deleted + ", imageName=" + imageName +"]";
	}

}
