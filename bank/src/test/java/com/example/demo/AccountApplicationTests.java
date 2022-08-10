package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.List;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;

import com.example.demo.controller.AccountController;
import com.example.demo.model.Account;
import com.example.demo.repository.AccountRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class AccountApplicationTests {

	@Autowired
	AccountRepository uRepo;
	
	@Autowired
	AccountController ucont;
	
	@Test
	@Order(1)
	public void testCreate()
	{
		Account u=new Account();
		u.setUserid(10004);
		u.setAccid(1000000004);
		u.setAbalance((float) 100.23);
		u.setBname("Pune");
		u.setAtype("S");
		uRepo.save(u);
		assertNotNull(uRepo.findById((long) 1000000004).get());
		
	}
	
	@Test
	@Order(2)
	public void testReadAll()
	{
		List<Account> list=uRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	@Order(3)
	public void testSingleRecord()
	{
		Account user=uRepo.findById((long) 1000000004).get();
		assertEquals("Pune",user.getBname());
	}
	
	@Test
	@Order(4)
	public void testUpdate()
	{
		Account u=uRepo.findById((long) 1000000004).get();
		u.setBname("Alandi");
		uRepo.save(u);
		assertNotEquals("Pune",uRepo.findById((long) 1000000004).get().getBname());
	}

	@Test
	@Order(5)
	public void testDelete()
	{
		uRepo.deleteById((long) 1000000004);
		assertThat(uRepo.existsById((long) 1000000004)).isFalse();
	}
	
	@Test
	@Order(6)
	public void testCreate1()
	{
		Account u=new Account();
		u.setUserid(10004);
		u.setAccid(1000000004);
		u.setAbalance((float) 100.23);
		u.setBname("Pune");
		u.setAtype("S");
		uRepo.save(u);
		assertNotNull(ucont.getById((long) 1000000004));
		
	}
}
