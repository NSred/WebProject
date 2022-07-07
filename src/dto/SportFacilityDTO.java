package dto;

import java.util.ArrayList;
import java.util.Date;

import beans.FacilityType;

public class SportFacilityDTO {

	private String sportFacilityId;
	private String name;
	private String type;
	private ArrayList<String> facilityContent;
	private String isWorking;
	private String location;
	private double averageGrade;
	private String openTime;
	private String closeTime;
	private String imageName;
	
	public SportFacilityDTO() {}
	
	public SportFacilityDTO(String sportFacilityId, String name, String type, ArrayList<String> facilityContent,
			String isWorking, String location, double averageGrade, String openTime, String closeTime,
			String imageName) {
		super();
		this.sportFacilityId = sportFacilityId;
		this.name = name;
		this.type = type;
		this.facilityContent = facilityContent;
		this.isWorking = isWorking;
		this.location = location;
		this.averageGrade = averageGrade;
		this.openTime = openTime;
		this.closeTime = closeTime;
		this.imageName = imageName;
	}

	public String getSportFacilityId() {
		return sportFacilityId;
	}

	public void setSportFacilityId(String sportFacilityId) {
		this.sportFacilityId = sportFacilityId;
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

	public ArrayList<String> getFacilityContent() {
		return facilityContent;
	}

	public void setFacilityContent(ArrayList<String> facilityContent) {
		this.facilityContent = facilityContent;
	}

	public String getIsWorking() {
		return isWorking;
	}

	public void setIsWorking(String isWorking) {
		this.isWorking = isWorking;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getAverageGrade() {
		return averageGrade;
	}

	public void setAverageGrade(double averageGrade) {
		this.averageGrade = averageGrade;
	}

	public String getOpenTime() {
		return openTime;
	}

	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}

	public String getCloseTime() {
		return closeTime;
	}

	public void setCloseTime(String closeTime) {
		this.closeTime = closeTime;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
}
