package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.UserRepository;
import com.example.demo.model.User;

@Service
public class UserService {
	@Autowired
	private UserRepository repo;
	public List<User> listAll() {
		return repo.findAll();
	}

	public User save(User user) {
		return repo.save(user);
	}

	public User get(int id) {
		return repo.findById(id).get();
	}

	public boolean delete(int id) {
		repo.deleteById(id);
		boolean a=repo.existsById(id);
		return (!a);
	}
}
