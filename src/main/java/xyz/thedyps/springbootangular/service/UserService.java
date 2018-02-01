package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.jwt.AuthDAO;
import xyz.thedyps.springbootangular.jwt.model.User;

import java.util.Map;

@Service
public class UserService {

    @Autowired
    AuthDAO authDAO;

    @Autowired
    PasswordEncoder passwordEncoder;

    public boolean insUser(User user) {
        user.setAuthority(2);
        user.setPw(passwordEncoder.encode(user.getPw()));
        return authDAO.insUser(user);
    }

    public boolean getUserId(String id) {
        if(authDAO.getUserId(id) != null) {
            return true;
        }
        return false;
    }

    public User getUser(String id) {
        return authDAO.getUser(id);
    }

    public boolean uptUser(User user) {
        return authDAO.uptUser(user);
    }

    public boolean uptUserPw(User user) {
        user.setPw(passwordEncoder.encode(user.getPw()));
        return this.authDAO.uptUserPw(user);
    }
}
