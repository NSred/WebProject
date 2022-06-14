package beans;

import java.util.Date;

public class Due {
	private String id;//10 characters
	private String type;
	private Date paymentDate;
	private Date dateAndTimeOfValidity;
	private double price;
	private String customerId;
	private boolean status;
	private double numberOfSession;
	
	
	public Due(String id, String type, Date paymentDate, Date dateAndTimeOfValidity, double price, String customerId,
			boolean status, double numberOfSession) {
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
	public Date getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(Date paymentDate) {
		this.paymentDate = paymentDate;
	}
	public Date getDateAndTimeOfValidity() {
		return dateAndTimeOfValidity;
	}
	public void setDateAndTimeOfValidity(Date dateAndTimeOfValidity) {
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
	@Override
	public String toString() {
		return "Due [id=" + id + ", type=" + type + ", paymentDate=" + paymentDate + ", dateAndTimeOfValidity="
				+ dateAndTimeOfValidity + ", price=" + price + ", customerId=" + customerId + ", status=" + status
				+ ", numberOfSession=" + numberOfSession + "]";
	}
	

}
