package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.jwt.AuthDAO;
import xyz.thedyps.springbootangular.jwt.JwtUserFactory;
import xyz.thedyps.springbootangular.jwt.model.User;

// 사용자 정보가 있는지 없는지 검색을 하여 존재한다면 JwtUserFactory에서 org.springframework.security.core.userdetails
    // 인터페이스를 구현한 객체를 반환한다.

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    AuthDAO authDAO;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = authDAO.getUser(id);
        user.setAuthorities(authDAO.getAuthority(id));

        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", id));
        } else {
            return JwtUserFactory.create(user);
        }
    }
}