package xyz.thedyps.springbootangular.goods.goodsVO;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

public class PcListVO {
	private String pcCode, pcBrand, pcType, cpuName, cpuKind,
	cpuSpeed, ramSpeed, mainBoardRamLimit, hddSpace,
	hddSpeed, ssdSpace, ssdSpeed, graphicKind, osName;
	private int pcPrice, pcDeliveryPrice, pcGrade;
	private final String deliveryDate;
	private PcListImgVO pcListImg;
	
	public PcListVO() {
		Calendar nowCal = Calendar.getInstance(Locale.KOREA);
		long nowTime = System.currentTimeMillis();
		if(nowCal.get(Calendar.DAY_OF_WEEK) == 7) {
			nowTime += 1000 * 60 * 60 * 24 * 3;
		} else {
			nowTime += 1000 * 60 * 60 * 24 * 2;
		}
		SimpleDateFormat sdf = new SimpleDateFormat("MM월 dd일 E요일");
		deliveryDate = sdf.format(nowTime);
	}

	public String getPcCode() {
		return pcCode;
	}

	public void setPcCode(String pcCode) {
		this.pcCode = pcCode;
	}

	public String getPcBrand() {
		return pcBrand;
	}

	public void setPcBrand(String pcBrand) {
		this.pcBrand = pcBrand;
	}

	public String getPcType() {
		return pcType;
	}

	public void setPcType(String pcType) {
		this.pcType = pcType;
	}

	public String getCpuName() {
		return cpuName;
	}

	public void setCpuName(String cpuName) {
		this.cpuName = cpuName;
	}

	public String getCpuKind() {
		return cpuKind;
	}

	public void setCpuKind(String cpuKind) {
		this.cpuKind = cpuKind;
	}

	public String getCpuSpeed() {
		return cpuSpeed;
	}

	public void setCpuSpeed(String cpuSpeed) {
		this.cpuSpeed = cpuSpeed;
	}

	public String getRamSpeed() {
		return ramSpeed;
	}

	public void setRamSpeed(String ramSpeed) {
		this.ramSpeed = ramSpeed;
	}

	public String getMainBoardRamLimit() {
		return mainBoardRamLimit;
	}

	public void setMainBoardRamLimit(String mainBoardRamLimit) {
		this.mainBoardRamLimit = mainBoardRamLimit;
	}

	public String getHddSpace() {
		return hddSpace;
	}

	public void setHddSpace(String hddSpace) {
		this.hddSpace = hddSpace;
	}

	public String getHddSpeed() {
		return hddSpeed;
	}

	public void setHddSpeed(String hddSpeed) {
		this.hddSpeed = hddSpeed;
	}

	public String getSsdSpace() {
		return ssdSpace;
	}

	public void setSsdSpace(String ssdSpace) {
		this.ssdSpace = ssdSpace;
	}

	public String getSsdSpeed() {
		return ssdSpeed;
	}

	public void setSsdSpeed(String ssdSpeed) {
		this.ssdSpeed = ssdSpeed;
	}

	public String getGraphicKind() {
		return graphicKind;
	}

	public void setGraphicKind(String graphicKind) {
		this.graphicKind = graphicKind;
	}

	public String getOsName() {
		return osName;
	}

	public void setOsName(String osName) {
		this.osName = osName;
	}

	public int getPcPrice() {
		return pcPrice;
	}

	public void setPcPrice(int pcPrice) {
		this.pcPrice = pcPrice;
	}

	public int getPcDeliveryPrice() {
		return pcDeliveryPrice;
	}

	public void setPcDeliveryPrice(int pcDeliveryPrice) {
		this.pcDeliveryPrice = pcDeliveryPrice;
	}

	public int getPcGrade() {
		return pcGrade;
	}

	public void setPcGrade(int pcGrade) {
		this.pcGrade = pcGrade;
	}

	public PcListImgVO getPcListImg() {
		return pcListImg;
	}

	public void setPcListImg(PcListImgVO pcListImg) {
		this.pcListImg = pcListImg;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}
}