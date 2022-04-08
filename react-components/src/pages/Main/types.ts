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
  url?: string;
  url_sq?: string;
  url_t?: string;
  url_s?: string;
  url_q?: string;
  url_m?: string;
  url_n?: string;
  url_z?: string;
  url_c?: string;
  url_l?: string;
  url_o?: string;
}

export interface IPhotosData {
  textError: string;
  data: IData[];
}

export interface IState {
  search: string;
  isLoading: boolean;
  textError: string;
  data: IData[];
}
