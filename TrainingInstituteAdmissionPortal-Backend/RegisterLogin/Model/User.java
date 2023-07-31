package com.springapp.RegisterLogin.Model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
public class User {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)

	
	private String username;
	
	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public User(String username, Long mobile, String email, String password) {
		super();
		this.username = username;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}



	public Long getMobile() {
		return mobile;
	}



	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	private Long mobile;
	
	private String email;
	
	private String password;
	

	
	public User(){};
	
}
