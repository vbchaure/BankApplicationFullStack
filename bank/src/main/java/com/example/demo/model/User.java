package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
		
		@Id
//		@GeneratedValue(strategy= GenerationType.IDENTITY)
		int userid;
		private String name;
		String emailid;
		String mobile;
		String smobile;
		String dob;
		String gender;
		
		public User() {

		}


		public User(int userid, String name, String emailid, String mobile, String smobile, String dob, String gender) {
			super();
			this.userid = userid;
			this.name = name;
			this.emailid = emailid;
			this.mobile = mobile;
			this.smobile = smobile;
			this.dob = dob;
			this.gender = gender;
		}



		public int getUserid() {
			return userid;
		}

		public void setUserid(int userid) {
			this.userid = userid;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmailid() {
			return emailid;
		}

		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}

		public String getMobile() {
			return mobile;
		}

		public void setMobile(String mobile) {
			this.mobile = mobile;
		}

		public String getSmobile() {
			return smobile;
		}

		public void setSmobile(String smobile) {
			this.smobile = smobile;
		}

		public String getDob() {
			return dob;
		}

		public void setDob(String dob) {
			this.dob = dob;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}
}
