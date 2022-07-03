package beans;

import java.util.ArrayList;
import java.util.Date;

public class Customer extends User {
	private ArrayList<SportFacility> visitedFacilities;
	private CustomerType customerType;
	private double collectedPoints;
	private Due due;
	

	public Customer() {}
	public Customer(String username, String password, String name, String surname, Date birthdate, Gender gender,
			UserRole userRole) {
		super(username, password, name, surname, birthdate, gender, userRole);
		this.setUserRole(userRole);
		visitedFacilities = new ArrayList<SportFacility>();
		this.customerType = new CustomerType("BRONZE", 0, 0);
		this.collectedPoints = 0;

	}
	public Customer(String username, String password, String name, String surname, Date birthdate, Gender gender,
			UserRole userRole,Due due) {
		super(username, password, name, surname, birthdate, gender, userRole);
		this.setUserRole(userRole);
		visitedFacilities = new ArrayList<SportFacility>();
		this.customerType = new CustomerType("BRONZE", 0, 0);
		this.collectedPoints = 0;
		this.due = due;

	}
	public ArrayList<SportFacility> getVisitedFacilities() {
		return visitedFacilities;
	}
	public void setVisitedFacilities(ArrayList<SportFacility> visitedFacilities) {
		this.visitedFacilities = visitedFacilities;
	}
	public CustomerType getCustomerType() {
		return customerType;
	}
	public void setCustomerType(CustomerType customerType) {
		this.customerType = customerType;
	}
	public double getCollectedPoints() {
		return collectedPoints;
	}
	public void setCollectedPoints(double collectedPoints) {
		this.collectedPoints = collectedPoints;
	}
	public Due getDue() {
		return due;
	}
	public void setDue(Due due) {
		this.due = due;
	}
	
	

}
