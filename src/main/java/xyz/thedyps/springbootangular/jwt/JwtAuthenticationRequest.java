package xyz.thedyps.springbootangular.jwt;

import java.io.Serializable;

public class  JwtAuthenticationRequest implements Serializable {

    private static final long serialVersionUID = -8445943548965154778L;

    private String id;
    private String pw;

    public JwtAuthenticationRequest() {
        super();
    }

    public JwtAuthenticationRequest(String id, String pw) {
        this.setId(id);
        this.setPw(pw);
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return this.pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }
}