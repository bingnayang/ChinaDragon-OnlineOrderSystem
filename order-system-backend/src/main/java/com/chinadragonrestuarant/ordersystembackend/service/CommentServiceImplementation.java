package com.chinadragonrestuarant.ordersystembackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chinadragonrestuarant.ordersystembackend.dao.CommentDAO;

@Service
public class CommentServiceImplementation implements CommentService {
	private CommentDAO commentDAO;

	@Autowired
	public CommentServiceImplementation(CommentDAO commentDAO) {
		this.commentDAO = commentDAO;
	}
	
	
}
