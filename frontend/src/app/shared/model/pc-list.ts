import {PcListImg} from "./pc-list-img";

export interface PcList {
  pcCode: string,
  pcBrand: string,
  pcType: string,
  cpuName: string,
  cpuKind: string,
  cpuSpeed: string,
  ramSpeed: string,
  mainBoardRamLimit: string,
  hddSpace: string,
  hddSpeed: string,
  ssdSpace: string,
  ssdSpeed: string,
  graphicKind: string,
  osName: string,
  deliveryDate: string;
  pcPrice: number,
  pcDeliprice: number,
  pcGrade: number;
  pcListImg: PcListImg;
}

