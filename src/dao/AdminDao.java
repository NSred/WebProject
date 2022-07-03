package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.Admin;


public class AdminDao  extends GenericDao<String, Admin, AdminDao>{

	@Override
	protected String getKey(Admin entity) {
		// TODO Auto-generated method stub
		return entity.getUsername();
	}

	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "admin.json";
	}
	public Map<String,Admin> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, Admin>>() {
		}.getType();

		Map<String, Admin> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<Admin> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<Admin>(getAllToMap().values());
	}
}