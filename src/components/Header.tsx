import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">InfectedSingleCountry</Link>
      <Link to="/world">InfectedWholeWorld</Link>
    </div>
  );
};
