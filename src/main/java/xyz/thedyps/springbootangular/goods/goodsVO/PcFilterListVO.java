package xyz.thedyps.springbootangular.goods.goodsVO;

import java.util.List;

public class PcFilterListVO {
	private List<String> filterPcBrand, filterCpuKind, filterRamSpace, filterGraKind, filterOsName;

	public List<String> getFilterPcBrand() {
		return filterPcBrand;
	}

	public void setFilterPcBrand(List<String> filterPcBrand) {
		this.filterPcBrand = filterPcBrand;
	}

	public List<String> getFilterCpuKind() {
		return filterCpuKind;
	}

	public void setFilterCpuKind(List<String> filterCpuKind) {
		this.filterCpuKind = filterCpuKind;
	}

	public List<String> getFilterRamSpace() {
		return filterRamSpace;
	}

	public void setFilterRamSpace(List<String> filterRamSpace) {
		this.filterRamSpace = filterRamSpace;
	}

	public List<String> getFilterGraKind() {
		return filterGraKind;
	}

	public void setFilterGraKind(List<String> filterGraKind) {
		this.filterGraKind = filterGraKind;
	}

	public List<String> getFilterOsName() {
		return filterOsName;
	}

	public void setFilterOsName(List<String> filterOsName) {
		this.filterOsName = filterOsName;
	}
}
