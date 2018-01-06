package xyz.thedyps.springbootangular.goods.goodsVO;

import java.util.List;

public class PcDetailImgVO {
	private String brandImg;
	private List<String> pcImg;
	private List<String> thumbnailImg;
	public String getBrandImg() { return brandImg; }
	public void setBrandImg(String brandImg) {
		this.brandImg = brandImg;
	}
	public List<String> getPcImg() {
		return pcImg;
	}
	public void setPcImg(List<String> pcImg) {
		this.pcImg = pcImg;
	}
	public List<String> getThumbnailImg() {
		return thumbnailImg;
	}
	public void setThumbnailImg(List<String> thumbnailImg) {
		this.thumbnailImg = thumbnailImg;
	}
}
