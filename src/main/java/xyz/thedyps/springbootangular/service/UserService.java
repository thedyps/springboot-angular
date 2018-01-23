package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.jwt.AuthDAO;
import xyz.thedyps.springbootangular.jwt.model.User;

@Service
public class UserService {

    @Autowired
    AuthDAO authDAO;

    public boolean insUser(User user) {
        user.setAuthority(2);
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
}
