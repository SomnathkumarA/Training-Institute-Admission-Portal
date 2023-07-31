package com.springapp.RegisterLogin.Model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admission {

    public Admission(Long id, String applicantName, String fatherName, String motherName, LocalDate dateOfBirth,
			String mobile, String gender, String religion, String bloodGroup, String nationality, String nationalId,
			String email, String presentAddress, String permanentAddress, String sscExamType, String sscBoard,
			String sscRollNo, Double sscResult, String sscGroup, Integer sscPassYear, String hscExamType,
			String hscBoard, String hscRollNo, Double hscResult, String hscGroup, Integer hscPassYear) {
		super();
		this.id = id;
		this.applicantName = applicantName;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.dateOfBirth = dateOfBirth;
		this.mobile = mobile;
		this.gender = gender;
		this.religion = religion;
		this.bloodGroup = bloodGroup;
		this.nationality = nationality;
		this.nationalId = nationalId;
		this.email = email;
		this.presentAddress = presentAddress;
		this.permanentAddress = permanentAddress;
		this.sscExamType = sscExamType;
		this.sscBoard = sscBoard;
		this.sscRollNo = sscRollNo;
		this.sscResult = sscResult;
		this.sscGroup = sscGroup;
		this.sscPassYear = sscPassYear;
		this.hscExamType = hscExamType;
		this.hscBoard = hscBoard;
		this.hscRollNo = hscRollNo;
		this.hscResult = hscResult;
		this.hscGroup = hscGroup;
		this.hscPassYear = hscPassYear;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getApplicantName() {
		return applicantName;
	}
	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getReligion() {
		return religion;
	}
	public void setReligion(String religion) {
		this.religion = religion;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getNationalId() {
		return nationalId;
	}
	public void setNationalId(String nationalId) {
		this.nationalId = nationalId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPresentAddress() {
		return presentAddress;
	}
	public void setPresentAddress(String presentAddress) {
		this.presentAddress = presentAddress;
	}
	public String getPermanentAddress() {
		return permanentAddress;
	}
	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}
	public String getSscExamType() {
		return sscExamType;
	}
	public void setSscExamType(String sscExamType) {
		this.sscExamType = sscExamType;
	}
	public String getSscBoard() {
		return sscBoard;
	}
	public void setSscBoard(String sscBoard) {
		this.sscBoard = sscBoard;
	}
	public String getSscRollNo() {
		return sscRollNo;
	}
	public void setSscRollNo(String sscRollNo) {
		this.sscRollNo = sscRollNo;
	}
	public Double getSscResult() {
		return sscResult;
	}
	public void setSscResult(Double sscResult) {
		this.sscResult = sscResult;
	}
	public String getSscGroup() {
		return sscGroup;
	}
	public void setSscGroup(String sscGroup) {
		this.sscGroup = sscGroup;
	}
	public Integer getSscPassYear() {
		return sscPassYear;
	}
	public void setSscPassYear(Integer sscPassYear) {
		this.sscPassYear = sscPassYear;
	}
	public String getHscExamType() {
		return hscExamType;
	}
	public void setHscExamType(String hscExamType) {
		this.hscExamType = hscExamType;
	}
	public String getHscBoard() {
		return hscBoard;
	}
	public void setHscBoard(String hscBoard) {
		this.hscBoard = hscBoard;
	}
	public String getHscRollNo() {
		return hscRollNo;
	}
	public void setHscRollNo(String hscRollNo) {
		this.hscRollNo = hscRollNo;
	}
	public Double getHscResult() {
		return hscResult;
	}
	public void setHscResult(Double hscResult) {
		this.hscResult = hscResult;
	}
	public String getHscGroup() {
		return hscGroup;
	}
	public void setHscGroup(String hscGroup) {
		this.hscGroup = hscGroup;
	}
	public Integer getHscPassYear() {
		return hscPassYear;
	}
	public void setHscPassYear(Integer hscPassYear) {
		this.hscPassYear = hscPassYear;
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String applicantName;
    private String fatherName;
    private String motherName;
    private LocalDate dateOfBirth;
    private String mobile;
    private String gender;
    private String religion;
    private String bloodGroup;
    private String nationality;
    private String nationalId;
    private String email;
    private String presentAddress;
    private String permanentAddress;
    private String sscExamType;
    private String sscBoard;
    private String sscRollNo;
    private Double sscResult;
    private String sscGroup;
    private Integer sscPassYear;
    private String hscExamType;
    private String hscBoard;
    private String hscRollNo;
    private Double hscResult;
    private String hscGroup;
    private Integer hscPassYear;

}

