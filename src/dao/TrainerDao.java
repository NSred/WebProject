package dao;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import beans.Trainer;

public class TrainerDao  extends GenericDao<String,Trainer, TrainerDao>{

	@Override
	protected String getKey(Trainer entity) {
		// TODO Auto-generated method stub
		return entity.getUsername();
	}

	@Override
	protected String getFilePath() {
		// TODO Auto-generated method stub
		return "trainers.json";
	}
	public Map<String,Trainer> getAllToMap(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<String, Trainer>>() {
		}.getType();

		Map<String, Trainer> map = gs.fromJson(json, empMapType);
		return map;
		
	}

	@Override
	public ArrayList<Trainer> getAllToList() {
		// TODO Auto-generated method stub
		return new ArrayList<Trainer>(getAllToMap().values());
	}
}