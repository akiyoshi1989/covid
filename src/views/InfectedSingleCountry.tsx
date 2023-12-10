import { useEffect, useState } from "react";
import { AppTitle } from "../components/AppTitle";
import { CountriesSelector } from "../components/CountriesSelector";
import { OneDayCard } from "../components/OneDayCard";
import { oneCountryInfect } from "../feature/infect";
import { formatDate } from "../utils/dateFormat";

export const InfectedSingleCountry = () => {
  const [slug, setSlug] = useState("japan");
  const [infectData, setInfectData] = useState<oneCountryInfect | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://monotein-books.vercel.app/api/corona-tracker/country/${slug}`
        );
        const infectedData = await res.json();
        const [last2day, last1day] = infectedData.slice(-2);

        setInfectData({
          Date: formatDate(last1day.Date),
          Confirmed: last1day.Confirmed,
          todayConfirmed: last1day.Confirmed - last2day.Confirmed,
          Recovered: last1day.Recovered,
          todayRecovered: last1day.Recovered - last2day.Recovered,
        });
      } catch (ex) {
        alert(ex);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div>
      <AppTitle />
      <CountriesSelector setSlug={setSlug} />
      {infectData ? <OneDayCard infectData={infectData} /> : null}
    </div>
  );
};
