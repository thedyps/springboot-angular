package xyz.thedyps.springbootangular.member;

@SuppressWarnings("serial")
public class AlreadyExistingMemberException extends RuntimeException {

	public AlreadyExistingMemberException(String message) {
		super(message);
	}

}
