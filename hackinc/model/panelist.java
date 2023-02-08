package com.capstone.hackinc.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class panelist {
	@Id
	@GeneratedValue

	private Long panelistId;
	private String panelistName;
	private Long mobileNumber;
	private String remark;
	public Long getPanelistId() {
		return panelistId;
	}
	public void setPanelistId(Long panelistId) {
		this.panelistId = panelistId;
	}
	public String getPanelistName() {
		return panelistName;
	}
	public void setPanelistName(String panelistName) {
		this.panelistName = panelistName;
	}
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
}
