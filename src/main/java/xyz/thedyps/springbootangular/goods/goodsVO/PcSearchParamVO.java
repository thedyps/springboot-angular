package xyz.thedyps.springbootangular.goods.goodsVO;

import java.util.List;

public class PcSearchParamVO {
    private int start, end;
    private String pcType, searchWord, sortWord;
    private List<String> filterPcBrand, filterCpuKind, filterRamSpace, filterGraKind, filterOsName;

    public String getPcType() { return pcType; }
    public void setPcType(String pcType) { this.pcType = pcType; }
    public int getStart() { return start; }
    public void setStart(int start) { this.start = start; }
    public int getEnd() { return end; }
    public void setEnd(int end) { this.end = end; }
    public String getSearchWord() {
        return searchWord;
    }
    public void setSearchWord(String searchWord) {
        this.searchWord = searchWord;
    }
    public String getSortWord() {
        return sortWord;
    }
    public void setSortWord(String sortWord) {
        this.sortWord = sortWord;
    }
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
