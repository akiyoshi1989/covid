export type infect = {
  Active: number;
  Confirmed: number;
  Country: string;
  CountryCode: string;
  Date: string;
  Deaths: number;
  ID: string;
  Lat: string;
  Lon: string;
  Province: string;
  Recovered: number;
};

export type oneCountryInfect = Pick<
  infect,
  "Confirmed" | "Date" | "Recovered"
> &
  toDayInfect;

type toDayInfect = {
  todayConfirmed: number;
  todayRecovered: number;
};

export type worldInfect = {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  Premium: any;
};

export type infectWorld = Pick<
  worldInfect,
  "Country" | "Date" | "TotalConfirmed" | "TotalRecovered"
>;
