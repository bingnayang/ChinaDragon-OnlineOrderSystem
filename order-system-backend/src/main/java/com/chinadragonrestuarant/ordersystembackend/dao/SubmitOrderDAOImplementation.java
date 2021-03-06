package com.chinadragonrestuarant.ordersystembackend.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.Session;
import org.hibernate.query.Query;
import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;

@Repository
public class SubmitOrderDAOImplementation implements SubmitOrderDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	Date date = new Date();
	
	@Autowired
	public SubmitOrderDAOImplementation(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}


	@Override
	public List<SubmitOrder> getAllActiveOrder() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<SubmitOrder> theQuery = currentSession.createQuery("FROM SubmitOrder order WHERE order.status='Active'",SubmitOrder.class);
		
		// Execute query and get result list
		List<SubmitOrder> activeOrderList = theQuery.getResultList();
		
		// Return the result
		return activeOrderList;
	}

	@Override
	public SubmitOrder getOrderById(int id) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Get the order
		SubmitOrder theOrder = currentSession.get(SubmitOrder.class, id);
		
		// Return the order
		return theOrder;
	}

	@Override
	public List<SubmitOrder> getTodayOrderList() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<SubmitOrder> theQuery = currentSession.createQuery("FROM SubmitOrder order WHERE order.date = :date",SubmitOrder.class);
		theQuery.setParameter("date",dateFormat.format(date));
		
		// Execute query and get result list
		List<SubmitOrder> orderList = theQuery.getResultList();
		
		// Return the result
		return orderList;
	}

	@Override
	public boolean updateStatus(SubmitOrder theOrder) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		try {
			// Save order
			currentSession.saveOrUpdate(theOrder);
			return true;
		}catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}


	@Override
	public double getTodayOrderTotal() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		try {
			// Create a query
			// Using native Hibernate API
			Query theQuery = currentSession.createQuery("SELECT sum(total) FROM SubmitOrder order WHERE order.status =:status AND order.date =: date");
			theQuery.setParameter("status","Pick-Up");
			theQuery.setParameter("date",dateFormat.format(date));
			
			List result = theQuery.list();
			Number theTotal = (Number) result.get(0);
			return (double) theTotal;
		}catch (Exception e) {
			return 0;
		}

	}

	@Override
	public List<SubmitOrder> getSelectedDateOrderList(String selectDate) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<SubmitOrder> theQuery = currentSession.createQuery("FROM SubmitOrder order WHERE order.date = :date",SubmitOrder.class);
		theQuery.setParameter("date",selectDate);
		
		// Execute query and get result list
		List<SubmitOrder> allOrderList = theQuery.getResultList();
		
		// Return the result
		return allOrderList;
	}


	@Override
	public List<SubmitOrder> getAllOrderList() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<SubmitOrder> theQuery = currentSession.createQuery("FROM SubmitOrder",SubmitOrder.class);
		
		// Execute query and get result list
		List<SubmitOrder> allOrderList = theQuery.getResultList();
		
		// Return the result
		return allOrderList;
	}
	
}
