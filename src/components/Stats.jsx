import { getStatsData } from "../data/stats";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();
  const stats = getStatsData(t);

  return (
    <div className=" max-w-[1400px] m-auto bg-[#081726] text-white py-10 grid grid-cols-4 text-center">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h3 className="text-3xl font-bold text-green-400">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}