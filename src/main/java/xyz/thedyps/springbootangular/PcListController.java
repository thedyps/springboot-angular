package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.springbootangular.goods.exception.PcFilterListNotFoundException;
import xyz.thedyps.springbootangular.goods.exception.PcListNotFoundException;
import xyz.thedyps.springbootangular.goods.goodsVO.PcFilterListVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcListVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcSearchParamVO;
import xyz.thedyps.springbootangular.service.PcListService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/goods/list")
public class PcListController {

	@Autowired
	PcListService service;

	@GetMapping(value = "/{pcType}/count", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public int getPcListCount (@PathVariable String pcType) {
		int pcListCount = service.getPcListCount(pcType);
		if(pcListCount <= 0) { throw new PcListNotFoundException(pcType); }
		return pcListCount;
	}

	@GetMapping(value = "/{pcType}/show/{num}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<PcListVO> getPcList(@PathVariable String pcType, @PathVariable int num) {
		int start = num*10-9, end = num*10;
		List<PcListVO> pcList = service.getPcList(pcType, start, end);
		if(pcList == null) { throw new PcListNotFoundException(pcType); }
		return pcList;
	}

	@RequestMapping(value = "/{pcType}/searchCount", method = RequestMethod.PATCH,
			consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public int getPcSearchCount(@PathVariable String pcType, @RequestBody PcSearchParamVO body) {
		int pcListCount = service.getSearchPcCount(pcType, body);
		if(pcListCount <= 0) { throw new PcListNotFoundException(pcType); }
		return pcListCount;
	}

	@RequestMapping(value = "/{pcType}/show/{num}/searchList", method = RequestMethod.PATCH,
			consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<PcListVO> getPcSearchList(@PathVariable String pcType, @PathVariable int num, @RequestBody PcSearchParamVO body) {
		int start = num*10-9, end = num*10;
		List<PcListVO> pcList = service.getSearchPcList(pcType, start, end, body);
		if(pcList == null) { throw new PcListNotFoundException(pcType); }
		return pcList;
	}

	@GetMapping(value = "/filter", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public PcFilterListVO getPcFilterList () {
		PcFilterListVO pcFilterList = service.getFilterList();
		if(pcFilterList == null) { throw new PcFilterListNotFoundException(); }
		return pcFilterList;
	}

	@ExceptionHandler(PcListNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcListNotFound(PcListNotFoundException e) {
		String pcType = e.getPcType();
		return new Error(pcType + "의 상품 목록이 발견되지 않음", e);
	}

	@ExceptionHandler(PcFilterListNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcFilterListNotFound(PcFilterListNotFoundException e) {
		return new Error("필터 리스트가 발견되지 않음", e);
	}
}
