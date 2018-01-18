package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.member.MemberDAO;
import xyz.thedyps.springbootangular.member.memberVO.AuthInfo;
import xyz.thedyps.springbootangular.member.memberVO.Login;
import xyz.thedyps.springbootangular.member.memberVO.MemberVO;

@Service
public class MemberService {

    @Autowired
    private MemberDAO memberDAO;

    public AuthInfo authenticate(Login login) {
        MemberVO member = memberDAO.selectById(login.getId());
        if (member == null) {
            System.out.print("id 없음");
        }
        if (!member.matchPassword(login.getPw())) {
            System.out.print("pw 없음");
        }
        return new AuthInfo(member.getId(), member.getEmail(), member.getName());
    }
}
