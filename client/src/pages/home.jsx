import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DashboardChart from "../components/DashboardChart";

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here’s a quick overview of your app.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Users" value="1,245" color="primary" />
          <StatCard title="Active Sessions" value="312" color="secondary" />
          <StatCard title="Success Rate" value="98.4%" color="success" />
          <StatCard title="Alerts" value="7" color="danger" />
        </div>

        {/* Chart + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DashboardChart />
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-dark mb-3">Recent Activity</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>OTP Verified</span>
                <span className="text-gray-400">2 mins ago</span>
              </li>
              <li className="flex justify-between">
                <span>Password Changed</span>
                <span className="text-gray-400">1 hour ago</span>
              </li>
              <li className="flex justify-between">
                <span>New Signup</span>
                <span className="text-gray-400">Yesterday</span>
              </li>
              <li className="flex justify-between">
                <span>OTP Sent</span>
                <span className="text-gray-400">2 days ago</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-dark mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <ActionButton label="Create User" color="primary" />
            <ActionButton label="View Logs" color="info" />
            <ActionButton label="Reports" color="warning" />
            <ActionButton label="Alerts" color="danger" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ===================== COMPONENTS ===================== */

function StatCard({ title, value, color }) {
  const colorMap = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-success",
    danger: "bg-danger",
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      <div
        className={`h-12 w-12 rounded-full ${colorMap[color]} flex items-center justify-center text-white font-bold`}
      >
        {title[0]}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold text-dark">{value}</p>
      </div>
    </div>
  );
}

function ActionButton({ label, color }) {
  const colorMap = {
    primary: "bg-primary hover:bg-secondary",
    info: "bg-info hover:opacity-90",
    warning: "bg-warning text-dark hover:opacity-90",
    danger: "bg-danger hover:opacity-90",
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg text-white transition ${colorMap[color]}`}
    >
      {label}
    </button>
  );
}
