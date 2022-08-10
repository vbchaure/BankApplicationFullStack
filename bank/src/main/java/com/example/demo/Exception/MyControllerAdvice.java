package com.example.demo.Exception;

import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.HttpHeadersReturnValueHandler;

@ControllerAdvice
public class MyControllerAdvice {

	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<String> handlerNoSuchException(NoSuchElementException elementException)
	{
		return new ResponseEntity<String>("No Value is present in database ,please change your request",HttpStatus.NOT_FOUND);
	}
	
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,HttpHeadersReturnValueHandler a)
	{
		return new ResponseEntity<Object> ("please change Http method type",HttpStatus.NOT_FOUND);
	}
}
