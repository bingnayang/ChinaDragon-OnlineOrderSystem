package com.chinadragonrestuarant.ordersystembackend.dao;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.chinadragonrestuarant.ordersystembackend.entity.Comment;

@Repository
public class CommentDAOImplementation implements CommentDAO {
	// Define field for entitymanager
	private EntityManager entityManager;

	@Autowired
	public CommentDAOImplementation(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Comment> getCommentList() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		// Create a query
		// Using native Hibernate API
		Query<Comment> theQuery = currentSession.createQuery("FROM Comment",Comment.class);
		// Execute query and get result list
		List<Comment> commentList = theQuery.getResultList();
		// Return the result
		return commentList;
	}

	@Override
	public Comment getCommentById(int commentId) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Get the comment
		Comment theComment = currentSession.get(Comment.class, commentId);
		
		// Return the comment
		return theComment;
	}

	
}
