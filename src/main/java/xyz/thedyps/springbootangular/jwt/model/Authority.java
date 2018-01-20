package xyz.thedyps.springbootangular.jwt.model;

public class Authority {
    private int authority;
    private String name;

    public int getAuthority() {
        return authority;
    }

    public void setAuthority(int authority) {
        this.authority = authority;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
