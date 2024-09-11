import { axios } from "@/common/AxiosClient";
import { ICountry, ICountryDetail } from "@/entities/Country";
import { Response } from "@/entities/Response";

type IGetCountriesResponse = Response<{
  data: ICountry[];
}>;

type IGetSingleCountryResponse = Response<{
  data: ICountryDetail;
}>;

const getGeoData = async <T = IGetSingleCountryResponse | IGetCountriesResponse>
  (type: 'single-country' | 'list-countries', countryISO?: string): Promise<T> => {
  const response = await axios.get('/geo', { params: { type, countryISO } });

  return response.data;
}

export {
  getGeoData,

  type ICountry,
  type IGetCountriesResponse,
  type IGetSingleCountryResponse,
}