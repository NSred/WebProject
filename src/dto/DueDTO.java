package dto;

import java.util.Date;

public class DueDTO {

	private String id;//10 characters
	private String type;
	private String paymentDate;
	private String dateAndTimeOfValidity;
	private double price;
	private String customerId;
	private boolean status;
	private double numberOfSession;
	
	public DueDTO() {}

	public DueDTO(String id, String type, String paymentDate, String dateAndTimeOfValidity, double price,
			String customerId, boolean status, double numberOfSession) {
		super();
		this.id = id;
		this.type = type;
		this.paymentDate = paymentDate;
		this.dateAndTimeOfValidity = dateAndTimeOfValidity;
		this.price = price;
		this.customerId = customerId;
		this.status = status;
		this.numberOfSession = numberOfSession;
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

	public String getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getDateAndTimeOfValidity() {
		return dateAndTimeOfValidity;
	}

	public void setDateAndTimeOfValidity(String dateAndTimeOfValidity) {
		this.dateAndTimeOfValidity = dateAndTimeOfValidity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public double getNumberOfSession() {
		return numberOfSession;
	}

	public void setNumberOfSession(double numberOfSession) {
		this.numberOfSession = numberOfSession;
	}
	
	
}
