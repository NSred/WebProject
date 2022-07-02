package beans;

import java.util.ArrayList;
import java.util.Date;

public class SportFacility {
	private String sportFacilityId;
	private String name;
	private FacilityType type;
	private ArrayList<String> facilityContent;
	private boolean isWorking;
	private String location;
	private double averageGrade;
	private Date openTime;
	private Date closeTime;
	
	
	public SportFacility(String sportFacilityId, String name, FacilityType type, ArrayList<String> facilityContent,
			boolean status, String location, double averageGrade, Date openTime, Date closeTime) {
		super();
		this.sportFacilityId = sportFacilityId;
		this.name = name;
		this.type = type;
		this.facilityContent = facilityContent;
		this.isWorking = status;
		this.location = location;
		this.averageGrade = averageGrade;
		this.openTime = openTime;
		this.closeTime = closeTime;
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
	public FacilityType getType() {
		return type;
	}
	public void setType(FacilityType type) {
		this.type = type;
	}
	public ArrayList<String> getFacilityContent() {
		return facilityContent;
	}
	public void setFacilityContent(ArrayList<String> facilityContent) {
		this.facilityContent = facilityContent;
	}
	public boolean isWorking() {
		return isWorking;
	}
	public void setWorking(boolean status) {
		this.isWorking = status;
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
	public Date getOpenTime() {
		return openTime;
	}
	public void setOpenTime(Date openTime) {
		this.openTime = openTime;
	}
	public Date getCloseTime() {
		return closeTime;
	}
	public void setCloseTime(Date closeTime) {
		this.closeTime = closeTime;
	}

	
}
