
interface ICity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface IState {
  id: number;
  name: string;
  cities: ICity[];
}

interface ICountry {
  name: string;
  iso: string;
}

interface ICountryDetail extends ICountry {
  states: IState[];
}

export {
  type ICity,
  type IState,
  type ICountry,
  type ICountryDetail
};