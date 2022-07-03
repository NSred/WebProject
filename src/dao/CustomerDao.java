package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.Customer;

public class CustomerDao extends GenericDao<String,Customer, CustomerDao>{

	
	public Map<String,Customer> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, Customer>>() {
		}.getType();

		Map<String, Customer> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<Customer> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<Customer>(getAllToMap().values());
	}


	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "customer.json";
	}

	@Override
	protected String getKey(Customer entity) {
		// TODO Auto-generated method stub
		return entity.getUsername();
	}
}