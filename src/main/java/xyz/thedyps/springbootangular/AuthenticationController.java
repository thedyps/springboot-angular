package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.springbootangular.jwt.JwtAuthenticationRequest;
import xyz.thedyps.springbootangular.jwt.JwtAuthenticationResponse;
import xyz.thedyps.springbootangular.jwt.JwtTokenUtil;

import xyz.thedyps.springbootangular.service.JwtUserDetailsService;

@CrossOrigin
@RequestMapping(path = "api/auth")
@RestController
public class AuthenticationController {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;


    // 로그인 요청시에 실행한다.
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest, Device device) throws AuthenticationException {
        // 클라이언트 사이드에서 전송한 authenticationRequest의 아이디와 패스워드를 사용한다.
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getId(),
                        authenticationRequest.getPw()
                )

        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 클라이언트에서 입력한 것으로 db에서 정보를 가져온다.
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getId());
        // 그 정보로 토큰을 생성해 전달한다.
        final String token = jwtTokenUtil.generateToken(userDetails, device);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationResponse(token));
    }
}
