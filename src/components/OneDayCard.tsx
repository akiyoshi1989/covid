import { OneCountryInfect } from "../feature/infect";

type OneDayCardProps = {
  infectData: OneCountryInfect;
};

export const OneDayCard: React.FC<OneDayCardProps> = ({ infectData }) => {
  return (
    <div>
      <p>日付：{infectData.Date}</p>
      <p>当日感染者数：{infectData.todayConfirmed}</p>
      <p>感染者数：{infectData.Confirmed}</p>
      <p>当日回復者数：{infectData.todayRecovered}</p>
      <p>回復者数：{infectData.Recovered}</p>
    </div>
  );
};
