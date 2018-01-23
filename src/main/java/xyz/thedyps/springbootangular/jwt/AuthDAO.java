package xyz.thedyps.springbootangular.jwt;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.springbootangular.jwt.model.Authority;
import xyz.thedyps.springbootangular.jwt.model.User;

import java.util.List;

@Mapper
@Repository
public interface AuthDAO {

    User getUser(String id);
    List<Authority> getAuthority(String id);
    boolean insUser(User user);
    String getUserId(String id);
    boolean uptUser(User user);
}
