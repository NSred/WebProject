package beans;

public class CustomerType {
	private String name;
	private double discount;	// U procentima - 80%
	private int minPoints;
	
	public CustomerType() {}
	public CustomerType(String name, double discount, int minPoints) {
		super();
		this.name = name;
		this.discount = discount;
		this.minPoints = minPoints;
	} 	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public int getMinPoints() {
		return minPoints;
	}
	public void setMinPoints(int minPoints) {
		this.minPoints = minPoints;
	}
}
