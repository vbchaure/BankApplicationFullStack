package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.controller.UserContoller;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class BankApplicationTests {

	@Autowired
	UserRepository uRepo;
	
	@Autowired
	UserContoller ucont;
	
	@Test
	@Order(1)
	public void testCreate()
	{
		User u=new User();
		u.setUserid(10004);
		u.setDob("2000-04-07");
		u.setEmailid("virendra.chaure@gmail.com");
		u.setSmobile("8999477844");
		u.setGender("M");
		u.setMobile("9552337996");
		u.setName("Virendra");
		uRepo.save(u);
		assertNotNull(ucont.getById(10004));
		
	}
	
	@Test
	@Order(2)
	public void testReadAll()
	{
		List<User> list=uRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	@Order(3)
	public void testSingleRecord()
	{
		User user=uRepo.findById(10004).get();
		assertEquals("2000-04-07",user.getDob());
	}
	
	@Test
	@Order(4)
	public void testUpdate()
	{
		User u=uRepo.findById(10004).get();
		u.setName("Abhinay");
		uRepo.save(u);
		assertNotEquals("Virendra",uRepo.findById(10004).get().getName());
	}

	@Test
	@Order(5)
	public void testDelete()
	{
		uRepo.deleteById(10004);
		assertThat(uRepo.existsById(10004)).isFalse();
	}
	

}
