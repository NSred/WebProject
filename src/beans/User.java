package beans;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class User {
	private String username;
	private String password;
	private String name;
	private String surname;
	private Date birthdate;
	private Gender gender;
	private UserRole userRole;
	private boolean deleted;
	
	

	public User(String username, String password, String name, String surname, Date birthdate, Gender gender,
			UserRole userRole) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.birthdate = birthdate;
		this.gender = gender;
		this.userRole = userRole;
		this.deleted = false;
	}
	public User(String username, String password, String name, String surname, String birthdate, Gender gender,
			UserRole userRole) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.userRole = userRole;
		this.deleted = false;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date parseDate = null;
		try {
			parseDate = sdf.parse(birthdate);
		} catch (ParseException e) {
			
			e.printStackTrace();
		}
		this.birthdate = parseDate;
	}
	public UserRole getUserRole() {
		return userRole;
	}
	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
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
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", name=" + name + ", surname=" + surname
				+ ", birthdate=" + birthdate + ", gender=" + gender + ", userRole=" + userRole + ", deleted=" + deleted
				+ "]";
	}
	

}
