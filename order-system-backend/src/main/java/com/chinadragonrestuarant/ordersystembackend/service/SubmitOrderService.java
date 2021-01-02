package com.chinadragonrestuarant.ordersystembackend.service;

import java.util.List;

import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;

public interface SubmitOrderService {

	List<SubmitOrder> getAllActiveOrder();
	
}
