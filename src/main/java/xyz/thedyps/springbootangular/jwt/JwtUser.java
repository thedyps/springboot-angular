package xyz.thedyps.springbootangular.jwt;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

public class JwtUser implements UserDetails {

    private final String id, pw, name, phone, address, email;
    private final Collection<? extends GrantedAuthority> authorities;

    public JwtUser(String id, String pw, String name, String phone, String address, String email, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.authorities = authorities;
    }

    @Override
    public String getUsername() {
        return id;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    public String getEmail() {
        return email;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return pw;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}