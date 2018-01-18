package xyz.thedyps.springbootangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import xyz.thedyps.springbootangular.goods.exception.PcDetailNotFoundException;
import xyz.thedyps.springbootangular.goods.exception.PcImgNotFoundException;
import xyz.thedyps.springbootangular.goods.exception.PcSummaryNotFoundException;
import xyz.thedyps.springbootangular.goods.goodsVO.PcDetailImgVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcDetailVO;
import xyz.thedyps.springbootangular.goods.goodsVO.PcSummaryVO;
import xyz.thedyps.springbootangular.service.PcDetailService;

@RestController
@CrossOrigin
@RequestMapping(path = "api/goods/detail")
public class PcDetailController {

	@Autowired
	private PcDetailService service;

	@RequestMapping(value = "/{pcCode}/summary", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public PcSummaryVO getPcSummary (@PathVariable String pcCode) {
		PcSummaryVO pcSummary = service.getPcSummary(pcCode);
		if(pcSummary == null) { throw new PcSummaryNotFoundException(pcCode); }
		return pcSummary;
	}

	@RequestMapping(value = "/{pcCode}/show", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public PcDetailVO getPcDetail (@PathVariable String pcCode) {
		PcDetailVO pcDetail = service.getPcDetail(pcCode);
		if(pcDetail == null) { throw new PcDetailNotFoundException(pcCode); }
		return pcDetail;
	}

	@RequestMapping(value = "/{pcCode}/img", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public PcDetailImgVO getPcDetailImg (@PathVariable String pcCode) {
		PcDetailImgVO pcDetailImg = service.getPcImg(pcCode);
		if(pcDetailImg == null) { throw new PcImgNotFoundException(pcCode); }
		return pcDetailImg;
	}

	@ExceptionHandler(PcSummaryNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcSummaryNotFound(PcSummaryNotFoundException e) {
		String pcCode = e.getPcCode();
		return new Error(pcCode + "의 상품 요약이 발견되지 않음", e);
	}

	@ExceptionHandler(PcDetailNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcDetailNotFound(PcDetailNotFoundException e) {
		String pcCode = e.getPcCode();
		return new Error(pcCode + "의 상품 상세가 발견되지 않음", e);
	}

	@ExceptionHandler(PcImgNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcImgNotFound(PcImgNotFoundException e) {
		String pcCode = e.getPcCode();
		return new Error(pcCode + "의 상품 이미지가 발견되지 않음", e);
	}
}
