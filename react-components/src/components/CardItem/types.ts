export interface IData {
  id: string;
  title?: string;
  description?: { _content?: string };
  ownername?: string;
  datetaken?: string;
  dateupload?: string;
  lastupdate?: string;
  views?: string;
  tags?: string;
  latitude?: string;
  longitude?: string;
  url_l?: string;
  height_l?: number;
  width_l?: number;
}
export default interface IProps {
  card: IData;
}
