package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.SportFacility;

public class SportFacilityDao extends GenericDao<String,SportFacility, SportFacilityDao>{
	
	//private HashMap<String, SportFacility> sportFacilities = new HashMap<String, SportFacility>();

	@Override
	protected String getFilePath() {
		return "sportFacility.json";
	}

	@Override
	protected String getKey(SportFacility entity) {
		return entity.getSportFacilityId();
	}
	
	public Map<String,SportFacility> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, SportFacility>>() {
		}.getType();

		Map<String, SportFacility> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<SportFacility> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<SportFacility>(getAllToMap().values());
	}

}
