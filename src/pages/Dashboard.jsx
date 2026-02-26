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
    <div className="  max-w-[1400px] min-h-screen  m-auto p-10 bg-gray-100 pt-[100px]">
      
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p>Total Clients</p>
          <h3 className="text-2xl font-bold">12,840</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>Active Loans</p>
          <h3 className="text-2xl font-bold">4,120</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>Total Deposits</p>
          <h3 className="text-2xl font-bold">940.5B UZS</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p>Monthly Revenue</p>
          <h3 className="text-2xl font-bold">12.4B UZS</h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h3 className="mb-4 font-semibold">Loan Growth Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={loans}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#16A34A" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="mb-4 font-semibold">Recent Transactions</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-t">
                <td>{t.date}</td>
                <td>{t.client}</td>
                <td>{t.type}</td>
                <td>{t.amount}</td>
                <td className="text-green-500">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}