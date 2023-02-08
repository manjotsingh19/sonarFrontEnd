package com.capstone.hackinc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class event {
	@Id
	@GeneratedValue
	
private int eventId;
private	String eventName;
private String description;
public int getEventId() {
	return eventId;
}
public void setEventId(int eventId) {
	this.eventId = eventId;
}
public String getEventName() {
	return eventName;
}
public void setEventName(String eventName) {
	this.eventName = eventName;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}

}

