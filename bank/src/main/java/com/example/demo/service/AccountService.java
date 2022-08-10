package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Account;
import com.example.demo.repository.AccountRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository repo;
	public List<Account> listAll() {
		return repo.findAll();
	}

	public Account save(Account acc) {
		return repo.save(acc);
	}

	public Account get(long id) {
		return repo.findById(id).get();
	}

	public boolean delete(long id) {
		repo.deleteById(id);
		boolean a=repo.existsById(id);
		return (!a);
	}

}
