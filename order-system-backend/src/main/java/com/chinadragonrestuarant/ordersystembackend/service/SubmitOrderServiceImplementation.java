package com.chinadragonrestuarant.ordersystembackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmitOrderServiceImplementation implements SubmitOrderService {
	private SubmitOrderDAO submitOrderDAO;
	
	@Autowired
	public SubmitOrderServiceImplementation(SubmitOrderDAO theSubmitOrderDAO) {
		submitOrderDAO = theSubmitOrderDAO;
	}
}
