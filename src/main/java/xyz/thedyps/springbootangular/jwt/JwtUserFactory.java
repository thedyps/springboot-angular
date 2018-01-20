package xyz.thedyps.springbootangular.jwt;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import xyz.thedyps.springbootangular.jwt.model.Authority;
import xyz.thedyps.springbootangular.jwt.model.User;

import java.util.List;
import java.util.stream.Collectors;

public class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getPw(),
                user.getName(),
                user.getPhone(),
                user.getAddress(),
                user.getEmail(),
                user.getGender(),
                user.getBirth(),
                mapToGrantedAuthorities(user.getAuthorities())
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        return authorities.stream()
                // 실질적인 권한 부여를 한다. 여기서는 admin이 user와 admin 권한 두개가 존재한다.
                .map(authority -> new SimpleGrantedAuthority(authority.getName()))
                .collect(Collectors.toList());
    }
}
