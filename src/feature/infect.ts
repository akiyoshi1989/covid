export type InfectResponse = {
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

export type OneCountryInfect = Pick<
  InfectResponse,
  "Confirmed" | "Date" | "Recovered"
> &
  TodayInfect;

type TodayInfect = {
  todayConfirmed: number;
  todayRecovered: number;
};

export type WorldInfectResponse = {
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

export type WorldInfect = Pick<
  WorldInfectResponse,
  "Country" | "Date" | "TotalConfirmed" | "TotalRecovered"
>;
