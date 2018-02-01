package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.springbootangular.jwt.JwtTokenUtil;
import xyz.thedyps.springbootangular.jwt.JwtUser;
import xyz.thedyps.springbootangular.jwt.model.User;
import xyz.thedyps.springbootangular.service.UserService;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RequestMapping(path = "api/user")
@RestController
public class UserController {
    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> userRegister(@RequestBody User user) {
        return ResponseEntity.ok(userService.insUser(user));
    }

    @RequestMapping(path = "/getId", method = RequestMethod.POST)
    public ResponseEntity<?> getUserID(@RequestBody String id) {
        return ResponseEntity.ok(userService.getUserId(id));
    }

    @RequestMapping(value = "/getUserInfo", method = RequestMethod.GET)
    public User getAuthenticatedUser(HttpServletRequest request) {
        String token = request.getHeader(tokenHeader).substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        return userService.getUser(username);
    }

    @RequestMapping(value = "/updateUserInfo", method = RequestMethod.POST)
    public boolean updateUser(HttpServletRequest request, @RequestBody User user) {
        String token = request.getHeader(tokenHeader).substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        user.setId(username);
        return userService.uptUser(user);
    }

    @RequestMapping(value = "/updateUserPw", method = RequestMethod.POST)
    public boolean uptUserPw(HttpServletRequest request, @RequestBody User user) {
        String token = request.getHeader(tokenHeader).substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        user.setId(username);
        return userService.uptUserPw(user);
    }
}
