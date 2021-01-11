package com.chinadragonrestuarant.ordersystembackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chinadragonrestuarant.ordersystembackend.dao.SubmitOrderDAO;
import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;

@Service
public class SubmitOrderServiceImplementation implements SubmitOrderService {
	private SubmitOrderDAO submitOrderDAO;
	
	@Autowired
	public SubmitOrderServiceImplementation(SubmitOrderDAO theSubmitOrderDAO) {
		submitOrderDAO = theSubmitOrderDAO;
	}

	@Override
	@Transactional
	public List<SubmitOrder> getAllActiveOrder() {
		return submitOrderDAO.getAllActiveOrder();
	}

	@Override
	@Transactional
	public SubmitOrder getOrderById(int id) {
		return submitOrderDAO.getOrderById(id);
	}

	@Override
	@Transactional
	public List<SubmitOrder> getTodayOrderList() {
		return submitOrderDAO.getTodayOrderList();
	}

	@Override
	@Transactional
	public boolean updateStatus(SubmitOrder theOrder) {
		return submitOrderDAO.updateStatus(theOrder);
	}

	@Override
	@Transactional
	public double getTodayOrderTotal() {
		return submitOrderDAO.getTodayOrderTotal();
	}

	@Override
	@Transactional
	public List<SubmitOrder> getSelectedDateOrderList(String selectDate) {
		return submitOrderDAO.getSelectedDateOrderList(selectDate);
	}

	@Override
	@Transactional
	public List<SubmitOrder> getAllOrderList() {
		return submitOrderDAO.getAllOrderList();
	}
}
