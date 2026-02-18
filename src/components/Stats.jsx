import { statsData } from "../data/stats";

export default function Stats() {
  return ( 
    <div className=" max-w-[1400px] m-auto bg-[#081726] text-white py-10 grid grid-cols-4 text-center">
      {statsData.map((item) => (
        <div key={item.id}>
          <h2 className="text-3xl font-bold text-green-400">
            {item.value}
          </h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
