package xyz.thedyps.springbootangular.member;

import java.util.Date;

public class MemberVO {

	private int id;
	private String email;
	private String password;
	private String name;
	private Date registerDate;

	public MemberVO(String email, String password, String name, Date registerDate) {
		this.email = email;
		this.password = password;
		this.name = name;
		this.registerDate = registerDate;
	}
	
	public MemberVO(int id, String email, String password, String name, Date registerDate) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.registerDate = registerDate;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public String getName() {
		return name;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void changePassword(String oldPassword, String newPassword) {
		if (!password.equals(oldPassword))
			throw new IdPasswordNotMatchingException();
		this.password = newPassword;
	}

	public boolean matchPassword(String pwd) {
		return this.password.equals(pwd);
	}

}
