package com.capstone.hackinc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class winners {
	@Id
	@GeneratedValue
	private Long winnersId;
	private Long eventId;
	private String firstTeam;
	private String secondTeam;
	private String thirdTeam;
	public Long getWinnersId() {
		return winnersId;
	}
	public void setWinnersId(Long winnersId) {
		this.winnersId = winnersId;
	}
	public Long getEventId() {
		return eventId;
	}
	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}
	public String getFirstTeam() {
		return firstTeam;
	}
	public void setFirstTeam(String firstTeam) {
		this.firstTeam = firstTeam;
	}
	public String getSecondTeam() {
		return secondTeam;
	}
	public void setSecondTeam(String secondTeam) {
		this.secondTeam = secondTeam;
	}
	public String getThirdTeam() {
		return thirdTeam;
	}
	public void setThirdTeam(String thirdTeam) {
		this.thirdTeam = thirdTeam;
	}
	
}
