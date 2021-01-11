package com.chinadragonrestuarant.ordersystembackend.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chinadragonrestuarant.ordersystembackend.entity.SubmitOrder;
import com.chinadragonrestuarant.ordersystembackend.service.SubmitOrderService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class SubmitOrderRESTController {
	private SubmitOrderService submitOrderService;

	@Autowired
	public SubmitOrderRESTController(SubmitOrderService theSubmitOrderService) {
		submitOrderService = theSubmitOrderService;
	}
	
	@GetMapping("/orders")
	public List<SubmitOrder> getAllActiveOrder(){
		return submitOrderService.getAllActiveOrder();
	}
	
	@GetMapping("/orders/{orderId}")
	public SubmitOrder getOrderById(@PathVariable int orderId) {
		SubmitOrder theOrder = submitOrderService.getOrderById(orderId);
		if(theOrder == null) {
			throw new RuntimeException("Order not found: "+orderId);
		}
		return theOrder;
	}
	
	@PutMapping("/orders")
	public boolean updateOrderStatus(@RequestBody SubmitOrder theOrder) {
		try {
			submitOrderService.updateStatus(theOrder);
			return true;
		}catch (Exception e) {
			return false;
		}
	}
	
	@GetMapping("/today-orders")
	public List<SubmitOrder> getTodayOrderList(){
		return submitOrderService.getTodayOrderList();
	}
	
	@GetMapping("/today-orders/total")
	public double getTodayOrderTotal(){
		return submitOrderService.getTodayOrderTotal();
	}
	
	@GetMapping("/all-orders/{selectDate}")
	public List<SubmitOrder> getSelectedDateOrderList(@PathVariable String selectDate){
		return submitOrderService.getSelectedDateOrderList(selectDate);
	}
	
	@GetMapping("/all-orders")
	public List<SubmitOrder> getAllOrderList(){
		return submitOrderService.getAllOrderList();
	}
	
}
