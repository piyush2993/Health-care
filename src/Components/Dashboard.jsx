import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-overview">
      <div className="header">
        <h2>Dashboard</h2>
        <a href="#" className="week-link">
          This Week
        </a>
      </div>
      <div className="dashboard-body">
        <AnatomySection />
        <HealthStatusCards />
        <div className="details-link">
          <a href="#">Details →</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
