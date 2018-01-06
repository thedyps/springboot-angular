package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.goods.PcFilterListDAO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcFilterListVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcListVO;
import xyz.thedyps.springbootangular.goods.PcListDAO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcSearchParamVO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PcListService {

    @Autowired
    private PcListDAO pcListDAO;

    @Autowired
    private PcFilterListDAO pcFilterListDAO;

    public int getPcListCount(String pcType) {
        Map<String, Object> param = new HashMap<>();
        param.put("pcType",pcType);
        return pcListDAO.getPcListCount(param);
    }

    public List<PcListVO> getPcList(String pcType, int start, int end) {
        Map<String, Object> param = new HashMap<>();
        param.put("pcType",pcType);
        param.put("start", start);
        param.put("end", end);
        return pcListDAO.getPcList(param);
    }

    public int getSearchPcCount(String pcType, PcSearchParamVO param) {
        param.setPcType(pcType);
        return pcListDAO.getSearchPcCount(param);
    }

    public List<PcListVO> getSearchPcList(String pcType, int start, int end, PcSearchParamVO param) {
        param.setPcType(pcType);
        param.setStart(start);
        param.setEnd(end);
        return pcListDAO.getSearchPcList(param);
    }


    public PcFilterListVO getFilterList() {
        PcFilterListVO pcFilterListVO = new PcFilterListVO();
        pcFilterListVO.setFilterPcBrand(pcFilterListDAO.getFilterPcBrand());
        pcFilterListVO.setFilterCpuKind(pcFilterListDAO.getFilterCpuKind());
        pcFilterListVO.setFilterRamSpace(pcFilterListDAO.getFilterRamSpace());
        pcFilterListVO.setFilterGraKind(pcFilterListDAO.getFilterGraKind());
        pcFilterListVO.setFilterOsName(pcFilterListDAO.getFilterOsName());
        return pcFilterListVO;
    }
}
