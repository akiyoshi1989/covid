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
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSlug(e.target.value);
  };

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
