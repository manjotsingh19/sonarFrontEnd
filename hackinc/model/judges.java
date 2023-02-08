package com.capstone.hackinc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class judges {
@Id
@GeneratedValue
	private Long judgesId;
	private String name;
	private Long mobileNumber;
	public Long getJudgesId() {
		return judgesId;
	}
	public void setJudgesId(Long judgesId) {
		this.judgesId = judgesId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	
	
}
