import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, CreditCard } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0B1F3A] text-white p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Agrobank CRM</h1>

      <nav className="space-y-4">
        <NavLink to="/" className="flex gap-3 hover:text-green-400">
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink to="/clients" className="flex gap-3 hover:text-green-400">
          <Users size={18} /> Clients
        </NavLink>

        <NavLink to="/loans" className="flex gap-3 hover:text-green-400">
          <CreditCard size={18} /> Loans
        </NavLink>
      </nav>
    </div>
  );
}