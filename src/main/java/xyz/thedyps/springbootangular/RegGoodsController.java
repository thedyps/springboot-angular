package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.springbootangular.admin.adminVO.RegInfoVO;
import xyz.thedyps.springbootangular.admin.adminVO.RegPartsVO;
import xyz.thedyps.springbootangular.service.RegGoodsService;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(path = "api/admin/regGoods")
@PreAuthorize("hasRole('ADMIN')")
public class RegGoodsController {

    @Autowired
    RegGoodsService service;

    @RequestMapping(path = "/cpuBrand", method = RequestMethod.GET)
    public List<String> getCpuBrand() {
        return this.service.getCpuBrand();
    }

    @RequestMapping(path = "/cpuKind", method = RequestMethod.PATCH)
    public List<String> getCpuKind(@RequestBody String body) {
        return this.service.getCpuKind(body);
    }

    @RequestMapping(path = "/cpu", method = RequestMethod.PATCH)
    public List<RegPartsVO> getCpu(@RequestBody Map body) {
        return this.service.getCpu(body);
    }

    @RequestMapping(path = "/cpuInfo", method = RequestMethod.PATCH)
    public RegInfoVO getCpuInfo(@RequestBody String body) {
        return this.service.getCpuInfo(body);
    }

    @RequestMapping(path = "/ramBrand", method = RequestMethod.GET)
    public List<String> getRamBrand() {
        return this.service.getRamBrand();
    }

    @RequestMapping(path = "/ramSpeed", method = RequestMethod.PATCH)
    public List<String> getRamSpeed(@RequestBody String body) {
        return this.service.getRamSpeed(body);
    }

    @RequestMapping(path = "/ram", method = RequestMethod.PATCH)
    public List<RegPartsVO> getRam(@RequestBody Map body) {
        return this.service.getRam(body);
    }

    @RequestMapping(path = "/ramInfo", method = RequestMethod.PATCH)
    public RegInfoVO getRamInfo(@RequestBody String body) {
        return this.service.getRamInfo(body);
    }

    @RequestMapping(path = "/graBrand", method = RequestMethod.GET)
    public List<String> getGraBrand() {
        return this.service.getGraBrand();
    }

    @RequestMapping(path = "/graKind", method = RequestMethod.PATCH)
    public List<String> getGraKind(@RequestBody String body) {
        return this.service.getGraKind(body);
    }

    @RequestMapping(path = "/gra", method = RequestMethod.PATCH)
    public List<RegPartsVO> getGra(@RequestBody Map body) {
        return this.service.getGra(body);
    }

    @RequestMapping(path = "/graInfo", method = RequestMethod.PATCH)
    public RegInfoVO getGraInfo(@RequestBody String body) {
        return this.service.getGraInfo(body);
    }

    @RequestMapping(path = "/hddBrand", method = RequestMethod.GET)
    public List<String> getHddBrand() {
        return this.service.getHddBrand();
    }

    @RequestMapping(path = "/hddSpeed", method = RequestMethod.PATCH)
    public List<String> getHddSpeed(@RequestBody String body) {
        return this.service.getHddSpeed(body);
    }

    @RequestMapping(path = "/hdd", method = RequestMethod.PATCH)
    public List<RegPartsVO> getHdd(@RequestBody Map body) {
        return this.service.getHdd(body);
    }

    @RequestMapping(path = "/hddInfo", method = RequestMethod.PATCH)
    public RegInfoVO getHddInfo(@RequestBody String body) {
        return this.service.getHddInfo(body);
    }

    @RequestMapping(path = "/ssdBrand", method = RequestMethod.GET)
    public List<String> getSsdBrand() {
        return this.service.getSsdBrand();
    }

    @RequestMapping(path = "/ssdSpeed", method = RequestMethod.PATCH)
    public List<String> getSsdSpeed(@RequestBody String body) {
        return this.service.getSsdSpeed(body);
    }

    @RequestMapping(path = "/ssd", method = RequestMethod.PATCH)
    public List<RegPartsVO> getSsd(@RequestBody Map body) {
        return this.service.getSsd(body);
    }

    @RequestMapping(path = "/ssdInfo", method = RequestMethod.PATCH)
    public RegInfoVO getSsdInfo(@RequestBody String body) {
        return this.service.getSsdInfo(body);
    }

    @RequestMapping(path = "/mainBrand", method = RequestMethod.GET)
    public List<String> getMainBrand() {
        return this.service.getMainBrand();
    }

    @RequestMapping(path = "/main", method = RequestMethod.PATCH)
    public List<RegPartsVO> getMain(@RequestBody String body) {
        return this.service.getMain(body);
    }

    @RequestMapping(path = "/mainInfo", method = RequestMethod.PATCH)
    public RegInfoVO getMainInfo(@RequestBody String body) {
        return this.service.getMainInfo(body);
    }

    @RequestMapping(path = "/os", method = RequestMethod.GET)
    public List<RegPartsVO> getOs() {
        return this.service.getOs();
    }

    @RequestMapping(path = "/osInfo", method = RequestMethod.PATCH)
    public RegInfoVO getOsInfo(@RequestBody String body) {
        return this.service.getOsInfo(body);
    }


    @RequestMapping(path = "/latestCode", method = RequestMethod.GET)
    public String getLatestCode() {
        return this.service.getLatestCode();
    }

    @RequestMapping(path = "/regGoods", method = RequestMethod.POST)
    public boolean regGoods(@RequestBody Map body) { return this.service.regGoods(body); }

    @RequestMapping(path = "/regImg", method = RequestMethod.POST)
    public boolean regImg(@RequestBody Map body) { return this.service.regImg(body); }
}
