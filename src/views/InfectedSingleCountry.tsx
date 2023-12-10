import { useEffect, useState } from "react";
import { AppTitle } from "../components/AppTitle";
import { CountriesSelector } from "../components/CountriesSelector";
import { OneDayCard } from "../components/OneDayCard";
import { oneCountryInfect } from "../feature/infect";

export const InfectedSingleCountry = () => {
  const [slug, setSlug] = useState("japan");
  const [infectData, setInfectData] = useState<oneCountryInfect | undefined>();

  // 日付をYYYY-MM-DDの書式で返すメソッド
  function formatDate(date: string) {
    const dt = new Date(date);
    const y = dt.getFullYear();
    const m = ("00" + (dt.getMonth() + 1)).slice(-2);
    const d = ("00" + dt.getDate()).slice(-2);
    return y + "-" + m + "-" + d;
  }
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
