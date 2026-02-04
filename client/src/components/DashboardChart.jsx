import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  const data = [
    { name: "Mon", users: 120 },
    { name: "Tue", users: 200 },
    { name: "Wed", users: 150 },
    { name: "Thu", users: 300 },
    { name: "Fri", users: 250 },
    { name: "Sat", users: 180 },
    { name: "Sun", users: 90 }
  ];
  
  export default function DashboardChart() {
    return (
      <div className="bg-white rounded-xl shadow p-5 h-full">
        <h3 className="font-semibold text-dark mb-3">Weekly Active Users</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#392f97"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  