package com.chinadragonrestuarant.ordersystembackend.dao;

import java.util.List;

import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;

public interface SubmitOrderDAO {

	List<SubmitOrder> getAllActiveOrder();

}
