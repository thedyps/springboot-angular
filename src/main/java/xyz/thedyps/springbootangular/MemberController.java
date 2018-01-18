package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.springbootangular.member.memberVO.AuthInfo;
import xyz.thedyps.springbootangular.member.memberVO.Login;
import xyz.thedyps.springbootangular.service.MemberService;

@RestController
@CrossOrigin
@RequestMapping(path = "api/member")
public class MemberController {

    @Autowired
    MemberService service;

    @RequestMapping(value="/login",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public AuthInfo login(@RequestBody Login body) {
        return this.service.authenticate(body);
    }

    /*
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<User> getUsers() {
        return this.users;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("id") Long id) {
        return this.users.stream().filter(user -> user.getId() == id).findFirst().orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        Long nextId = 0L;
        if (this.users.size() != 0) {
            User lastUser = this.users.stream().skip(this.users.size() - 1).findFirst().orElse(null);
            nextId = lastUser.getId() + 1;
        }

        user.setId(nextId);
        this.users.add(user);
        return user;

    }

    @RequestMapping(method = RequestMethod.PUT)
    public User updateUser(@RequestBody User user) {
        User modifiedUser = this.users.stream().filter(u -> u.getId() == user.getId()).findFirst().orElse(null);
        modifiedUser.setFirstName(user.getFirstName());
        modifiedUser.setLastName(user.getLastName());
        modifiedUser.setEmail(user.getEmail());
        return modifiedUser;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deleteUser(@PathVariable Long id) {
        User deleteUser = this.users.stream().filter(user -> user.getId() == id).findFirst().orElse(null);
        if (deleteUser != null) {
            this.users.remove(deleteUser);
            return true;
        } else  {
            return false;
        }


    }
    */
}