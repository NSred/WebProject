package beans;

import java.time.Duration;

public class Training {
	private String id;
	private String type;
	private String sportFacilityId;
	private Duration duration;
	private String trainerId;
	private String description;
	private boolean deleted;
	
	public Training(String id, String type, String sportFacilityId, Duration duration, String trainerId,
			String description) {
		super();
		this.id = id;
		this.type = type;
		this.sportFacilityId = sportFacilityId;
		this.duration = duration;
		this.trainerId = trainerId;
		this.description = description;
		this.deleted = false;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public Duration getDuration() {
		return duration;
	}
	public void setDuration(Duration duration) {
		this.duration = duration;
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
	@Override
	public String toString() {
		return "Training [id=" + id + ", type=" + type + ", sportFacilityId=" + sportFacilityId + ", duration="
				+ duration + ", trainerId=" + trainerId + ", description=" + description + ", deleted=" + deleted + "]";
	}

}
