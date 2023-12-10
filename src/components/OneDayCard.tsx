import { oneCountryInfect } from "../feature/infect";

type oneDayCardProps = {
  infectData: oneCountryInfect;
};

export const OneDayCard: React.FC<oneDayCardProps> = ({ infectData }) => {
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
