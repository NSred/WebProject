package dao;

import java.util.ArrayList;
import java.util.Map;

public interface IDao<TKey,TEntity> {
	void create(TEntity entity);
	TEntity getById(TKey key);
	void update(TEntity entity);
	void delete(TKey key);
	ArrayList<TEntity> getAllToList();
	Map<TKey, TEntity> getAllToMap();
}
