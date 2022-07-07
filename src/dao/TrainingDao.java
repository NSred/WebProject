package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.Training;

public class TrainingDao extends GenericDao<String,Training, TrainingDao>{

	@Override
	protected String getKey(Training entity) {
		// TODO Auto-generated method stub
		return entity.getName();
	}

	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "trainings.json";
	}
	public Map<String,Training> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, Training>>() {
		}.getType();

		Map<String, Training> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<Training> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<Training>(getAllToMap().values());
	}
}
