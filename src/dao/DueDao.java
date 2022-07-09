package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.Due;


public class DueDao  extends GenericDao<String, Due, DueDao>{

	@Override
	protected String getKey(Due entity) {
		// TODO Auto-generated method stub
		return entity.getId();
	}

	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "due.json";
	}
	public Map<String,Due> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, Due>>() {
		}.getType();

		Map<String, Due> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<Due> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<Due>(getAllToMap().values());
	}
}