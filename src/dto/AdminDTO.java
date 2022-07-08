package dto;

public class AdminDTO {

	private String username;
	private String password;
	private String name;
	private String surname;
	private String birthdate;
	private String gender;
	private String userRole;
	private boolean deleted;
	private boolean banned;
	
	public AdminDTO() {}

	public AdminDTO(String username, String password, String name, String surname, String birthdate, String gender,
			String userRole, boolean deleted, boolean banned) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.birthdate = birthdate;
		this.gender = gender;
		this.userRole = userRole;
		this.deleted = deleted;
		this.banned = banned;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean isBanned() {
		return banned;
	}

	public void setBanned(boolean banned) {
		this.banned = banned;
	}
}
