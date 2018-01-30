package xyz.thedyps.springbootangular.admin;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.springbootangular.admin.adminVO.*;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface RegGoodsDAO {

    List<String> getCpuBrand();

    List<String> getCpuKind(String param);

    List<RegPartsVO> getCpu(Map<String, String> param);

    List<String> getRamBrand();

    List<String> getRamSpeed(String param);

    List<RegPartsVO> getRam(Map<String, String> param);

    List<String> getGraBrand();

    List<String> getGraKind(String param);

    List<RegPartsVO> getGra(Map<String, String> param);

    List<String> getHddBrand();

    List<String> getHddSpeed(String param);

    List<RegPartsVO> getHdd(Map<String, String> param);

    List<String> getSsdBrand();

    List<String> getSsdSpeed(String param);

    List<RegPartsVO> getSsd(Map<String, String> param);

    List<String> getMainBrand();

    List<RegPartsVO> getMain(String param);

    List<RegPartsVO> getOs();

    String getLatestCode();

    List<ImgListVO> getImgList(String param);

    boolean regImg(Map<String, Object> param);

    RegInfoVO getCpuInfo(String param);

    RegInfoVO getRamInfo(String param);

    RegInfoVO getGraInfo(String param);

    RegInfoVO getHddInfo(String param);

    RegInfoVO getSsdInfo(String param);

    RegInfoVO getMainInfo(String param);

    RegInfoVO getOsInfo(String param);

    boolean regGoods(Map param);

    List<RegGoodsVO> getRegGoods(RegFilterVO param);

    int getRegCount(RegFilterVO param);

    boolean uptGoods(Map param);

    boolean uptImg(Map<String, Object> param);

    boolean delGoods(String param);
}
