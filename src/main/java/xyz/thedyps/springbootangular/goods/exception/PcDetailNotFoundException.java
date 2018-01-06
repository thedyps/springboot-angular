package xyz.thedyps.springbootangular.goods.exception;

public class PcDetailNotFoundException extends RuntimeException {
    private String pcCode;
    public PcDetailNotFoundException(String pcType) {
        this.pcCode = pcType;
    }
    public String getPcCode() {
        return pcCode;
    }
}
