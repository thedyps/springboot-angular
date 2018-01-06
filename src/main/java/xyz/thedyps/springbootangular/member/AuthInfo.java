package xyz.thedyps.springbootangular.member;

public class AuthInfo {

	private int id;
	private String email;
	private String name;

	public AuthInfo(int id, String email, String name) {
		this.id = id;
		this.email = email;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getName() {
		return name;
	}

}
