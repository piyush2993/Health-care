import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import "../styles/statistics.css";

const data = [
  { name: "Mon", a: 12, b: 8, c: 5 },
  { name: "Tues", a: 6, b: 14, c: 10 },
  { name: "Wed", a: 10, b: 9, c: 7 },
  { name: "Thurs", a: 8, b: 12, c: 6 },
  { name: "Fri", a: 14, b: 6, c: 9 },
  { name: "Sat", a: 6, b: 10, c: 5 },
  { name: "Sun", a: 8, b: 7, c: 6 },
];
const Statistics = () => {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtext">3 appointments on this week</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} className="chart">
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Bar dataKey="a" fill="#00E4F4" barSize={4} radius={[4, 4, 0, 0]} />
          <Bar dataKey="b" fill="#4C52F2" barSize={4} radius={[4, 4, 0, 0]} />
          <Bar dataKey="c" fill="#C7C8D9" barSize={4} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
