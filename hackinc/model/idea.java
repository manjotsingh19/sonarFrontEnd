package com.capstone.hackinc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class idea {
	@Id
	@GeneratedValue

	
	private Long problemId;
	private String problemStatement;
	private String problemDescription;
	private String demo;
	private Long teamId;
	private Long domainId;
	public Long getProblemId() {
		return problemId;
	}
	public void setProblemId(Long problemId) {
		this.problemId = problemId;
	}
	public String getProblemStatement() {
		return problemStatement;
	}
	public void setProblemStatement(String problemStatement) {
		this.problemStatement = problemStatement;
	}
	public String getProblemDescription() {
		return problemDescription;
	}
	public void setProblemDescription(String problemDescription) {
		this.problemDescription = problemDescription;
	}
	public String getDemo() {
		return demo;
	}
	public void setDemo(String demo) {
		this.demo = demo;
	}
	public Long getTeamId() {
		return teamId;
	}
	public void setTeamId(Long teamId) {
		this.teamId = teamId;
	}
	public Long getDomainId() {
		return domainId;
	}
	public void setDomainId(Long domainId) {
		this.domainId = domainId;
	}
	
	
	
}
