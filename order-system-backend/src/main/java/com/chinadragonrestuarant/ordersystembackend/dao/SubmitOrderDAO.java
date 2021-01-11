package com.chinadragonrestuarant.ordersystembackend.dao;

import java.util.List;

import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;

public interface SubmitOrderDAO {

	List<SubmitOrder> getAllActiveOrder();

	SubmitOrder getOrderById(int id);

	List<SubmitOrder> getTodayOrderList();

	boolean updateStatus(SubmitOrder theOrder);

	double getTodayOrderTotal();

	List<SubmitOrder> getSelectedDateOrderList(String selectDate);

	List<SubmitOrder> getAllOrderList();

}
