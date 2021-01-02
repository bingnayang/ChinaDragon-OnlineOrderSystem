package com.chinadragonrestuarant.ordersystembackend.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

@Repository
public class SubmitOrderDAOImplementation implements SubmitOrderDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public SubmitOrderDAOImplementation(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}
	
}
