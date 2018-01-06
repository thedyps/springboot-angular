package xyz.thedyps.springbootangular.goods;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.springbootangular.goods.goodsVO.PcListVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcSearchParamVO;

@Mapper
@Repository
public interface PcListDAO {
	int getPcListCount(Map<String, Object> pcType);
	List<PcListVO> getPcList(Map<String, Object> param);
	int getSearchPcCount(PcSearchParamVO param);
	List<PcListVO> getSearchPcList(PcSearchParamVO param);
}
