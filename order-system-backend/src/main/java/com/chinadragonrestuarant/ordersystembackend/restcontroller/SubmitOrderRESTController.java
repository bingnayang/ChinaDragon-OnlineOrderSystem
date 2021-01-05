package com.chinadragonrestuarant.ordersystembackend.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/active-orders")
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
}
