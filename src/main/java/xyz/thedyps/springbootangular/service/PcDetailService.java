package xyz.thedyps.springbootangular.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.goods.PcDetailDAO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcDetailImgVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcDetailVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcSummaryVO;

@Service
public class PcDetailService  {
	
	@Autowired
	PcDetailDAO pcDetailDAO;

	public PcSummaryVO getPcSummary(String pcCode) {
		return pcDetailDAO.getPcSummary(pcCode);
	}

	public PcDetailVO getPcDetail(String pcCode) {
		return pcDetailDAO.getPcDetail(pcCode);
	}

	public PcDetailImgVO getPcImg(String pcCode) {
		Map<String, Object> param = new HashMap<>();
		final int index = pcDetailDAO.getPcImgCount(pcCode) / 2 + 2;
		param.put("pcCode", pcCode);
		param.put("index", index);
		
		PcDetailImgVO pcDetailImg = new PcDetailImgVO();
		pcDetailImg.setBrandImg(pcDetailDAO.getBrandImg(pcCode));
		pcDetailImg.setPcImg(pcDetailDAO.getPcImg(param));
		pcDetailImg.setThumbnailImg(pcDetailDAO.getThumbnailImg(param));
		return pcDetailImg;
	}
}
