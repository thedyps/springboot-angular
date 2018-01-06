package xyz.thedyps.springbootangular.goods;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PcFilterListDAO {
    List<String> getFilterPcBrand();
    List<String> getFilterCpuKind();
    List<String> getFilterRamSpace();
    List<String> getFilterGraKind();
    List<String> getFilterOsName();
}
