import { WorldInfect } from "../feature/infect";
import { formatDate } from "../utils/dateFormat";

type WorldCardProps = {
  infectData: WorldInfect;
};

export const WorldCard: React.FC<WorldCardProps> = ({ infectData }) => {
  return (
    <div>
      <p>国名：{infectData.Country}</p>
      <p>日付：{formatDate(infectData.Date)}</p>
      <p>感染者数：{infectData.TotalConfirmed}</p>
      <p>回復者数：{infectData.TotalRecovered}</p>
    </div>
  );
};
