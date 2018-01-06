package xyz.thedyps.springbootangular.member;

import xyz.thedyps.springbootangular.member.AuthInfo;

public interface AuthService {
	AuthInfo authenticate(String email, String password);
}
