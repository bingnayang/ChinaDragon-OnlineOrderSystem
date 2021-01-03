package com.chinadragonrestuarant.ordersystembackend.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chinadragonrestuarant.ordersystembackend.service.CommentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentRESTController {
	private CommentService commentService;

	@Autowired
	public CommentRESTController(CommentService commentService) {
		this.commentService = commentService;
	}
	
	
}
