package com.chinadragonrestuarant.ordersystembackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chinadragonrestuarant.ordersystembackend.dao.CommentDAO;
import com.chinadragonrestuarant.ordersystembackend.entity.Comment;

@Service
public class CommentServiceImplementation implements CommentService {
	private CommentDAO commentDAO;

	@Autowired
	public CommentServiceImplementation(CommentDAO commentDAO) {
		this.commentDAO = commentDAO;
	}

	@Override
	@Transactional
	public List<Comment> getCommentList() {
		return commentDAO.getCommentList();
	}

	@Override
	@Transactional
	public Comment getCommentById(int commentId) {
		return commentDAO.getCommentById(commentId);
	}
	
	
}
