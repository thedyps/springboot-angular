package xyz.thedyps.springbootangular.member;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.springbootangular.member.memberVO.MemberVO;

@Mapper
@Repository
public interface MemberDAO {
    MemberVO selectById(String id);
}
