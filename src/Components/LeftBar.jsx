import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  MessageCircle,
  Phone,
  Settings,
} from "lucide-react";
import "../styles/leftbar.css";

const LeftBar = () => {
  const navItems = [
    { label: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { label: "History", path: "/his", icon: <History size={18} /> },
    { label: "Calendar", path: "/cal", icon: <Calendar size={18} /> },
    {
      label: "Appointments",
      path: "/appoint",
      icon: <CalendarClock size={18} />,
    },
    { label: "Statistics", path: "/stats", icon: <BarChart2 size={18} /> },
  ];

  const tools = [
    { label: "Chat", path: "/chat", icon: <MessageCircle size={18} /> },
    { label: "Support", path: "/support", icon: <Phone size={18} /> },
  ];

  return (
    <div className="left-bar-container">
      <div className="left-bar-top">
        <div className="section">
          <h4 className="section-title">General</h4>
          <ul className="nav-list">
            {navItems.map(({ label, path, icon }) => (
              <li key={path} className="nav-label">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h4 className="section-title">Tools</h4>
          <ul className="nav-list">
            {tools.map(({ label, icon }) => (
              <li key={label} className="nav-label">
                <div className="nav-link inactive">
                  <NavLink
                    to={label}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="setting-link">
        <Settings size={18} />
        <span>Setting</span>
      </div>
    </div>
  );
};

export default LeftBar;
