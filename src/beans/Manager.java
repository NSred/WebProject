package beans;

import java.util.Date;

public class Manager extends User{
	private String sportFacilityId;

	public Manager() {}
	
	public Manager(String username, String password, String name, String surname, Date birthdate, Gender gender,
			UserRole userRole, String sportFacilityId) {
		super(username, password, name, surname, birthdate, gender, userRole);
		// TODO Auto-generated constructor stub
		this.setUserRole(UserRole.MANAGER);
		this.sportFacilityId = sportFacilityId;
	}

	public String getSportFacilityId() {
		return sportFacilityId;
	}

	public void setSportFacilityId(String sportFacilityId) {
		this.sportFacilityId = sportFacilityId;
	}
	
}
