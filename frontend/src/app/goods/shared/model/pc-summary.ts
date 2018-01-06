import {PcDetailImg} from "./pc-detail-img";

export interface PcSummary {
  pcCode: string,
  pcBrand?: string,
  pcType?: string,
  cpuName?: string,
  cpuKind?: string,
  cpuSpeed?: string,
  ramSpeed?: string,
  mainBoardRamLimit?: string,
  hddSpace?: string,
  hddSpeed?: string,
  ssdSpace?: string,
  ssdSpeed?: string,
  graphicKind?: string,
  osName?: string,
  deliveryDate?: string;
  pcPrice?: number,
  pcDeliveryPrice?: number,
  pcGrade?: number,
  pcStock?: number;
  pcDetailImg?: PcDetailImg;
}
