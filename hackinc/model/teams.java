package com.capstone.hackinc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
public class teams {
@Id
@GeneratedValue
private Long teamId;
private String teamName;
public String getDomainId() {
	return domainId;
}
public void setDomainId(String domainId) {
	this.domainId = domainId;
}
private int membersCount;
private String emailId;
private String password;
private int marks;
private String status;
private String domainId;

public Long getTeamId() {
	return teamId;
}
public void setTeamId(Long teamId) {
	this.teamId = teamId;
}
public String getTeamName() {
	return teamName;
}
public void setTeamName(String teamName) {
	this.teamName = teamName;
}
public int getMembersCount() {
	return membersCount;
}
public void setMembersCount(int membersCount) {
	this.membersCount = membersCount;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public int getMarks() {
	return marks;
}
public void setMarks(int marks) {
	this.marks = marks;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}


}
