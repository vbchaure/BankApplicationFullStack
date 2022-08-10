package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Account;
import com.example.demo.service.AccountService;
import java.util.regex.*;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping("/acc")
public class AccountController {

	@Autowired
	private AccountService service;

	Logger log = LoggerFactory.getLogger(AccountController.class);

	@PostMapping("/addAccount/{id}")
	public ResponseEntity<Account> createAccount( @RequestBody Account acc ,@PathVariable int id)
	{

		try{
			log.debug("Request : For Creating New Account");
			long accountid=(long) (Math.random()*(999999999)+1000000000);
			acc.setAccid(accountid);
			log.debug("Account Id Generated");
			acc.setUserid(id);
			boolean b1=Pattern.compile("[A-Za-z]{3,40}").matcher(acc.getBname()).matches();
			boolean b2=Pattern.compile("(C|S){1}").matcher(acc.getAtype()).matches();
			boolean b3=Pattern.compile("(([0-9]{1,8})(.[0-9]{1,2}))").matcher(String.valueOf(acc.getAbalance())).matches();
			if(b1&&b2&&b3)
			{
				log.debug(" Response : Account Details Successfully validated ");
				service.save(acc);
				log.debug(" Response : New Account Created Successfully ");
			} 
			return new ResponseEntity<>(acc, HttpStatus.OK);
		}
		catch (Exception e)
		{
			String response = "Cannot Create Account";
			log.debug("Response : {}", response);
			log.debug("Response : {}", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/GetAllAccount")
	public ResponseEntity<List<Account>> getAccounts() {
		log.debug("Request : for getting all Account Records ");
		try{
			String response = "We got all the Account records";
			log.debug("Response : {}", response);
			List<Account> listacc = service.listAll();
			return new ResponseEntity<>(listacc, HttpStatus.OK);
		}
		catch (Exception e)
		{
			String response = "Cannot Get All Accounts";
			log.debug("Response : {}", response);
			log.debug("Response : {}", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/GetAllAccountByID/{id}")
	public ResponseEntity<List<Account>> getAccount(@PathVariable int id) {
		try {
			log.debug("Request : for getting all Account Records for userid = {} ",id);
			List<Account> listuser = service.listAll();
			List<Account> listacc=new ArrayList<Account>();
			for(Account a:listuser)
			{
				if(a.getUserid()==id)
				{
					listacc.add(a);
				}
			}
			if(listacc.size()==0)
			{
				log.debug("Response : No Account Records found for userid = {} ",id);
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			}
			log.debug("Response : We get all the Records of account for userid = {} ",id);
			return new ResponseEntity<>(listacc, HttpStatus.OK);
		}catch(Exception e)
		{   
			log.debug("Response : can't get all the Records of account for userid = {} ",id);
			log.debug("Response : {}", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getaccount/{id}")
	public ResponseEntity<Account> getById(@PathVariable long id)
	{
		try {
			log.debug("Request : For getting Account of accountid = {}",id);
			Account accData= service.get(id);
			log.debug("Response :We get the Account of accountid = {}",id);
			return new ResponseEntity<>(accData, HttpStatus.OK);
		} catch (Exception e) {
			log.debug("Request : {}",e);
			String response = "getById Account of accountid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteaccount/{id}")
	public ResponseEntity<HttpStatus> deleteAccount(@PathVariable long id)
	{
		try {
			log.debug("Request : For Deleting Account of accountid = {} ", id);
			service.delete(id);
			log.debug("Response : Account Deleted of accountid = {} ", id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			log.debug("Response : {}", e);
			String response = " For deleting Account of accountid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("update/{id}")
	public ResponseEntity<Account> updateUser( @RequestBody Account accDetails,@PathVariable long id) {
		try {
			log.debug("Request : For updating Account of accountid = {} ", id);
			Account acc = service.get(id);
			acc.setAccid(accDetails.getAccid());
			acc.setBname(accDetails.getBname());
			acc.setAtype(accDetails.getAtype());
			acc.setAbalance(accDetails.getAbalance());
			Account updatedAccount = service.save(acc);
			return new ResponseEntity<>(updatedAccount, HttpStatus.OK);
		} catch (Exception e) {
			log.debug("Response : {}", e);
			String response = " For updating Account of accountid = " + id + " is not Present";
			log.debug("Response : {}", response);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
