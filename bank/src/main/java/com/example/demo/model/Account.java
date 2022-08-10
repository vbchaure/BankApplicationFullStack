package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Account {
	
	@Id
//	@GeneratedValue(strategy= GenerationType.IDENTITY)
	long accid;
	int userid;
	String bname;
	String atype;
	float abalance;
	
	public Account() {
	}

	public Account(long accid, int userid, String bname, String atype, float abalance) {
		super();
		this.accid = accid;
		this.userid = userid;
		this.bname = bname;
		this.atype = atype;
		this.abalance = abalance;
	}

	public long getAccid() {
		return accid;
	}

	public void setAccid(long accid) {
		this.accid = accid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}

	public String getAtype() {
		return atype;
	}

	public void setAtype(String atype) {
		this.atype = atype;
	}

	public float getAbalance() {
		return abalance;
	}

	public void setAbalance(float abalance) {
		this.abalance = abalance;
	}
	
}
