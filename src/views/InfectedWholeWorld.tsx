import { useEffect, useState } from "react";
import { AppTitle } from "../components/AppTitle";
import { WorldCard } from "../components/WorldCard";
import { worldInfect } from "../feature/infect";

export const InfectedWholeWorld = () => {
  const [countriesInfect, setCountriesInfect] = useState<worldInfect[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://monotein-books.vercel.app/api/corona-tracker/summary"
      );
      setCountriesInfect((await res.json()).Countries);
    };
    fetchData();
  }, []);
  return (
    <div>
      <AppTitle />
      {countriesInfect.map((infect) => {
        return <WorldCard infectData={infect} />;
      })}
    </div>
  );
};
