package beans;

public class CustomerType {
	private String name;
	private double discount;	// U procentima - 80%
	private int minPoints;
	
	public CustomerType(String name, double dicount, int minPoints) {
		super();
		this.name = name;
		this.discount = dicount;
		this.minPoints = minPoints;
	} 	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getDicount() {
		return discount;
	}
	public void setDicount(int dicount) {
		this.discount = dicount;
	}
	public int getMinPoints() {
		return minPoints;
	}
	public void setMinPoints(int minPoints) {
		this.minPoints = minPoints;
	}

	public double getDiscountFloat() {
		return this.discount;
	}

}
