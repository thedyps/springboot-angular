export interface RegPart {
  name: string;
  code: string;
}

export interface RegInfo {
  price: number;
  grade?: number;
}

export interface RegGoods {
  pcPrice, pcDeliprice, pcGrade, pcStock: number;
  pcCode, pcBrand, pcType: string;
  cpuCode, cpuName, ramCode, ramName, mainCode, mainName,
  hddCode?, hddName?, ssdCode?, ssdName?, graCode, graName, osCode, osName: string;

  cpuPrice, ramPrice, graPrice, hddPrice?, ssdPrice?, mainPrice, osPrice: number;
  cpuGrade, ramGrade, graGrade, hddGrade?, ssdGrade?, mainGrade: number;
}

export interface RegPageNum {
  startPage: number,
  endPage: number;
  pageCount: number;
}

export interface RegFilter {
  code, type, brand: string;
  start, end: number;
}
