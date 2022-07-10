package dao;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.TrainingHistory;

public class TrainingHistoryDao extends GenericDao<String,TrainingHistory, TrainingHistoryDao>{

	@Override
	protected String getKey(TrainingHistory entity) {
		// TODO Auto-generated method stub
		return entity.getId();
	}

	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "trainingHistory.json";
	}
	public Map<String,TrainingHistory> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, TrainingHistory>>() {
		}.getType();

		Map<String, TrainingHistory> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<TrainingHistory> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<TrainingHistory>(getAllToMap().values());
	}
}
