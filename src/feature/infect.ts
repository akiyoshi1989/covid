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
