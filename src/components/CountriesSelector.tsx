import countiesList from "../feature/CountiesList.json";

type countiesList = {
  Country: string;
  Slug: string;
}[];

type CountriesSelectorProps = {
  setSlug: (event: string) => void;
};

export const CountriesSelector: React.FC<CountriesSelectorProps> = ({
  setSlug,
}) => {
  const counties: countiesList = JSON.parse(JSON.stringify(countiesList));
  const handleChange = (e: any) => {
    setSlug(e.target.value);
  };
  console.log(counties);

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        {counties.map((county) => (
          <option value={county.Slug}>{county.Country}</option>
        ))}
      </select>
    </div>
  );
};
