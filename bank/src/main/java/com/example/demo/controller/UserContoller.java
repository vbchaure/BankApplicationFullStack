package com.example.demo.controller;

import java.util.List;
import java.util.regex.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins="http://localhost:4200/",allowedHeaders="*")
@RestController
public class UserContoller {

	@Autowired
	private UserService service;

	Logger log = LoggerFactory.getLogger(UserContoller.class);

	@GetMapping("/test/{name}")
	public String greeting(@PathVariable String name) {
		log.debug("Request : {}", name);
		try {
			if (name.equalsIgnoreCase("test")) {
				throw new RuntimeException("Opps Exception raised....");
			}
			String response = "Hi " + name + " Welcome to Java Techie";
			log.debug("Response : {}", response);
			return response;
		}
		catch(Exception e)
		{
			log.debug("Response : {}", e);
		}
		return name;
	}

	@GetMapping("/GetAllUser")
	public ResponseEntity<List<User>> getAllUser() {
		log.debug("Request : for getting all User Records ");
		try {
			List<User> listuser = service.listAll();
			String response = "We got all the user records";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(listuser, HttpStatus.OK);
		}catch(Exception e)
		{
			String response = "Cannot Get All Users";
			log.debug("Response : {}", response);
			log.debug("Response : {}", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/addUser")
	public ResponseEntity<User> createUser( @RequestBody User user )
	{
		try{
			log.debug("Request : For Creating New User");
			int id=(int) (Math.random()*(89999)+10000);
			user.setUserid(id);
			log.debug("User Id Generated");
			boolean b1=Pattern.compile("[A-Za-z]{3,40}").matcher(user.getName()).matches();
			boolean b2=Pattern.compile("[a-zA-z]([a-zA-Z0-9][.-_]){0,5}[a-zA-Z0-9]{2,10}@([a-zA-Z0-9]{2,8}.){1,4}[a-zA-Z0-9]{2,5}").matcher(user.getEmailid()).matches();
			boolean b3=Pattern.compile("[9+8+7+6][0-9]{9}").matcher(user.getMobile()).matches();
			boolean b4=Pattern.compile("[9+8+7+6][0-9]{9}").matcher(user.getSmobile()).matches();
			boolean b5=Pattern.compile("(19|20)\\d\\d[-.](0[1-9]|1[012])[-.](0[1-9]|[12][0-9]|3[01])").matcher(user.getDob()).matches();
			boolean b6=Pattern.compile("(M|F){1}").matcher(user.getGender()).matches();
			if(b1&&b2&&b3&&b4&&b5&&b6)
			{
				log.debug(" Response : User Details Successfully validated ");
				service.save(user);
				log.debug(" Response : New User Created Successfully ");
			}
			return new ResponseEntity<>(user, HttpStatus.OK);
		}catch(Exception e)
		{
			String response = "Cannot Create User";
			log.debug("Response : {}", response);
			log.debug("Response : {}", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("getuser/{id}")
	public ResponseEntity<User> getById(@PathVariable int id)
	{
		try{
			log.debug("Request : For getting User of userid = {}",id);
			User tutorialData = service.get(id);
			log.debug("Response : We get the User of userid = {}",id);
			return new ResponseEntity<>(tutorialData, HttpStatus.OK);
		}catch (Exception e) {
			log.debug("Response : {}", e);
			String response = "getById user of userid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("deleteuser/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable int id)
	{
		try {
			log.debug("Request : For Deleting User of Userid = {} ", id);
			service.delete(id);
			log.debug("Response : User Deleted of Userid = {} ", id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			log.debug("Response : {}", e);
			String response = " For deleting user of userid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("update/{id}")
	public ResponseEntity<User> updateUser( @RequestBody User userDetails,@PathVariable Integer id) {
		try{
			log.debug("Request : For updating User of Userid = {} ", id);
			User user = service.get(id);
			user.setDob(userDetails.getDob());
			user.setEmailid(userDetails.getEmailid());
			user.setGender(userDetails.getGender());
			user.setMobile(userDetails.getMobile());
			user.setName(userDetails.getName());
			user.setSmobile(userDetails.getSmobile());
			User updatedUser=service.save(user);
			service.save(updatedUser);
			log.debug("Response : User Updated of Userid = {} ", id);
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		}catch (Exception e) {
			log.debug("Response : {}", e);
			String response = " For updating user of userid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
