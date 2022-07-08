package beans;

import java.util.Date;

public class Admin extends User {

	public Admin() {}
	
	public Admin(String username, String password, String name, String surname, Date birthdate, Gender gender,
			UserRole userRole) {
		super(username, password, name, surname, birthdate, gender, userRole);
		this.setUserRole(UserRole.ADMIN);
	}

}
