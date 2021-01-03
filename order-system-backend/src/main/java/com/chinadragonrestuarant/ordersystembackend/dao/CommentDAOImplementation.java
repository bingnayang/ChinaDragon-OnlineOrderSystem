package com.chinadragonrestuarant.ordersystembackend.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CommentDAOImplementation implements CommentDAO {
	// Define field for entitymanager
	private EntityManager entityManager;

	@Autowired
	public CommentDAOImplementation(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	
}
