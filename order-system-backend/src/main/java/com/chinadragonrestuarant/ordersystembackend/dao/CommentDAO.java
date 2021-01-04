package com.chinadragonrestuarant.ordersystembackend.dao;

import java.util.List;

import com.chinadragonrestuarant.ordersystembackend.entity.Comment;

public interface CommentDAO {

	List<Comment> getCommentList();

}
