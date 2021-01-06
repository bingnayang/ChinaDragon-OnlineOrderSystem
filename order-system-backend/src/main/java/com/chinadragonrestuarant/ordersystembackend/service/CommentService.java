package com.chinadragonrestuarant.ordersystembackend.service;

import java.util.List;

import com.chinadragonrestuarant.ordersystembackend.entity.Comment;

public interface CommentService {

	List<Comment> getCommentList();

	Comment getCommentById(int commentId);

}
