package xyz.thedyps.springbootangular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.springbootangular.admin.RegGoodsDAO;
import xyz.thedyps.springbootangular.admin.adminVO.ImgListVO;
import xyz.thedyps.springbootangular.admin.adminVO.RegInfoVO;
import xyz.thedyps.springbootangular.admin.adminVO.RegPartsVO;

import java.awt.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class RegGoodsService {

    @Autowired
    private RegGoodsDAO regGoodsDAO;

    public List<String> getCpuBrand() {
        return this.regGoodsDAO.getCpuBrand();
    }

    public List<String> getCpuKind(String brand) {
        return this.regGoodsDAO.getCpuKind(brand);
    }

    public List<RegPartsVO> getCpu(Map param) {
        return this.regGoodsDAO.getCpu(param);
    }

    public RegInfoVO getCpuInfo(String code) { return this.regGoodsDAO.getCpuInfo(code); }

    public List<String> getRamBrand() {
        return this.regGoodsDAO.getRamBrand();
    }

    public List<String> getRamSpeed(String brand) {
        return this.regGoodsDAO.getRamSpeed(brand);
    }

    public List<RegPartsVO> getRam(Map param) {
        return this.regGoodsDAO.getRam(param);
    }

    public RegInfoVO getRamInfo(String code) { return this.regGoodsDAO.getRamInfo(code); }

    public List<String> getGraBrand() {
        return this.regGoodsDAO.getGraBrand();
    }

    public List<String> getGraKind(String brand) {
        return this.regGoodsDAO.getGraKind(brand);
    }

    public List<RegPartsVO> getGra(Map param) {
        return this.regGoodsDAO.getGra(param);
    }

    public RegInfoVO getGraInfo(String code) { return this.regGoodsDAO.getGraInfo(code); }

    public List<String> getHddBrand() {
        return this.regGoodsDAO.getHddBrand();
    }

    public List<String> getHddSpeed(String brand) {
        return this.regGoodsDAO.getHddSpeed(brand);
    }

    public List<RegPartsVO> getHdd(Map param) {
        return this.regGoodsDAO.getHdd(param);
    }

    public RegInfoVO getHddInfo(String code) { return this.regGoodsDAO.getHddInfo(code); }

    public List<String> getSsdBrand() {
        return this.regGoodsDAO.getSsdBrand();
    }

    public List<String> getSsdSpeed(String brand) {
        return this.regGoodsDAO.getSsdSpeed(brand);
    }

    public List<RegPartsVO> getSsd(Map param) {
        return this.regGoodsDAO.getSsd(param);
    }

    public RegInfoVO getSsdInfo(String code) { return this.regGoodsDAO.getSsdInfo(code); }

    public List<String> getMainBrand() {
        return this.regGoodsDAO.getMainBrand();
    }

    public List<RegPartsVO> getMain(String brand) {
        return this.regGoodsDAO.getMain(brand);
    }

    public RegInfoVO getMainInfo(String code) { return this.regGoodsDAO.getMainInfo(code); }

    public List<RegPartsVO> getOs() {
        return this.regGoodsDAO.getOs();
    }

    public RegInfoVO getOsInfo(String code) { return this.regGoodsDAO.getOsInfo(code); }

    public String getLatestCode() {
        String code = this.regGoodsDAO.getLatestCode();
        int temp = 0;
        Pattern p = Pattern.compile("(PC-[A-Z])([0-9]{3})");
        Matcher m;
        if(code != null) {
            m = p.matcher(code);
            if(m.find()) {
                temp = new Integer(m.group(2));
            }
            temp++;
            String tempString = "";
            if(temp < 10) {
                tempString = "00" + temp;
            } else if(temp < 100) {
                tempString = "0" + temp;
            } else {
                tempString += temp;
            }
            return m.group(1) + tempString;
        }
        return "PC-X001";
    }

    public boolean regGoods(Map body) {
        return this.regGoodsDAO.regGoods(body);
    }

    public boolean regImg(Map body) {
        List<ImgListVO> imgList = this.regGoodsDAO.getImgList(body.get("brand").toString());
        Map<String, Object> param = new HashMap<>();
        boolean chk = false;
        for(ImgListVO img: imgList) {
            param.put("pccode", body.get("code").toString());
            param.put("imgorder", img.getImgOrder());
            param.put("imgpath", img.getImgPath());

            chk = this.regGoodsDAO.regImg(param);
        }
        param = null;
        return chk;
    }


}
