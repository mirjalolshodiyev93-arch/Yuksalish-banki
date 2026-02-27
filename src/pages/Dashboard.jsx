import { loans } from "../data/loans";
import { transactions } from "../data/transactions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  return (
    <div className="max-w-[1400px] min-h-screen mx-auto p-4 sm:p-10 bg-gray-100 pt-[100px]">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <p className="text-sm sm:text-base">Total Clients</p>
          <h3 className="text-xl sm:text-2xl font-bold">12,840</h3>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <p className="text-sm sm:text-base">Active Loans</p>
          <h3 className="text-xl sm:text-2xl font-bold">4,120</h3>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <p className="text-sm sm:text-base">Total Deposits</p>
          <h3 className="text-xl sm:text-2xl font-bold">940.5B UZS</h3>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <p className="text-sm sm:text-base">Monthly Revenue</p>
          <h3 className="text-xl sm:text-2xl font-bold">12.4B UZS</h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow mb-6 sm:mb-10">
        <h3 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Loan Growth Trends</h3>
        <ResponsiveContainer width="100%" height={250} sm={{height: 300}}>
          <LineChart data={loans}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#16A34A" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow overflow-x-auto">
        <h3 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Recent Transactions</h3>
        <table className="w-full text-left min-w-[500px] sm:min-w-full">
          <thead>
            <tr>
              <th className="py-2 sm:py-3 text-sm sm:text-base">Date</th>
              <th className="py-2 sm:py-3 text-sm sm:text-base">Client</th>
              <th className="py-2 sm:py-3 text-sm sm:text-base">Type</th>
              <th className="py-2 sm:py-3 text-sm sm:text-base">Amount</th>
              <th className="py-2 sm:py-3 text-sm sm:text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-t text-sm sm:text-base">
                <td className="py-2 sm:py-3">{t.date}</td>
                <td className="py-2 sm:py-3">{t.client}</td>
                <td className="py-2 sm:py-3">{t.type}</td>
                <td className="py-2 sm:py-3">{t.amount}</td>
                <td className="py-2 sm:py-3 text-green-500">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}