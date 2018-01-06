package xyz.thedyps.springbootangular.goods.exception;

public class PcListNotFoundException extends RuntimeException {
    private String pcType;

    public PcListNotFoundException(String pcType) {
        this.pcType = pcType;
    }

    public String getPcType() {
        return pcType;
    }
}
