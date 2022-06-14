package beans;

import java.util.ArrayList;
import java.util.Date;

public class SportFacility {
	private String sportFacilityId;
	private String name;
	private String type;
	private ArrayList<String> facilityContent;
	private boolean status;
	private Location location;
	private double averageGrade;
	private Date openTime;
	private Date closeTime;
	
	
	public SportFacility(String sportFacilityId, String name, String type, ArrayList<String> facilityContent,
			boolean status, Location location, double averageGrade, Date openTime, Date closeTime) {
		super();
		this.sportFacilityId = sportFacilityId;
		this.name = name;
		this.type = type;
		this.facilityContent = facilityContent;
		this.status = status;
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
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
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
