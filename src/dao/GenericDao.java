package dao;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

public abstract class GenericDao<TKey,TEntity, Dao extends GenericDao<TKey, TEntity, Dao>> implements IDao<TKey, TEntity>{
	protected abstract TKey getKey(TEntity entity);
	protected abstract String getFilePath();
	protected  String getPath() {
		return basePath + getFilePath();
	}
	//protected abstract void RemoveAllReference(TEntity entity);
	@SuppressWarnings("unused")
	private String basePath;

	public void setBasePath(String path) {
		this.basePath = path;
	}
	protected Gson gs = new GsonBuilder()
	      .setPrettyPrinting()
	      .create();
	
	
	protected void serialize(Map<TKey, TEntity> entities) {
		String jsonStr = gs.toJson(entities);
		//System.out.println(jsonStr);

		FileOutputStream outputStream = null;
		try {
			outputStream = new FileOutputStream(getPath());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		byte[] strToBytes = jsonStr.getBytes();
		try {
			outputStream.write(strToBytes);
		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			outputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	private Map<TKey, TEntity> deserialize(){
		String json = "";
		try {
			json = new String(Files.readAllBytes(Paths.get(getPath())));
		} catch (IOException e) {
			e.printStackTrace();
		}

		Type empMapType = new TypeToken<Map<TKey, TEntity>>() {
		}.getType();

		Map<TKey, TEntity> map = gs.fromJson(json, empMapType);
		return map;
	}
	public void create(TEntity entity) {
		Map<TKey, TEntity> map = getAllToMap();
		map.put(getKey(entity), entity);
		serialize(map);
	}
	public TEntity getById(TKey key) {
		Map<TKey, TEntity> map = getAllToMap();
		return map.get(key);
		
	}
	public void update(TEntity entity) {
		Map<TKey, TEntity> map = getAllToMap();
		map.put(getKey(entity), entity);
		serialize(map);
	}
	public void delete(TKey key) {
		Map<TKey, TEntity> map = getAllToMap();
		map.remove(key);
		serialize(map);
	}
	public ArrayList<TEntity> getAllToList(){
		return new ArrayList<TEntity>(getAllToMap().values());
	}
	public Map<TKey, TEntity> getAllToMap(){
		return deserialize();
	}
}
