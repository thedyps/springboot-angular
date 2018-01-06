package xyz.thedyps.springbootangular.member;

import xyz.thedyps.springbootangular.member.MemberVO;
import xyz.thedyps.springbootangular.member.RegisterRequest;

public interface MemberRegisterService {
	int getMemCount() throws Exception;
	void regMem(RegisterRequest req);
	void update(MemberVO member);

	/*
	public List<MemberVO> selectAll() {
		List<MemberVO> results = jdbcTemplate.query("select * from MEMBER",
				new RowMapper<MemberVO>() {
					@Override
					public MemberVO mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						MemberVO member = new MemberVO(rs.getString("EMAIL"),
								rs.getString("PASSWORD"),
								rs.getString("NAME"),
								rs.getTimestamp("REGDATE"));
						member.setId(rs.getLong("ID"));
						return member;
					}
				});
		return results;
	}

	public int count() {
		Integer count = jdbcTemplate.queryForObject("select count(*) from MEMBER", Integer.class);
		return count;
	}
	*/

}
