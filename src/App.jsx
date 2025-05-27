import { Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import LeftBar from "./Components/LeftBar";
import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import Calender from "./Components/Calender";
import { upcomingSchedule } from "./data/upcomingSchedule";
import Appointments from "./Components/Appointments";
import Statistics from "./Components/Statistics";
import Chat from "./Components/Chat";
import Support from "./Components/Support";

const App = () => {
  return (
    <div className="main">
      <article className="top">
        <TopBar />
      </article>
      <article className="left">
        <section className="left-bar">
          <LeftBar />
        </section>
        <section className="left-route">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/his" element={<History />} />
            <Route path="/cal" element={<Calender />} />
            <Route
              path="/appoint"
              element={<Appointments schedule={upcomingSchedule} />}
            />
            <Route path="/stats" element={<Statistics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </section>
      </article>
    </div>
  );
};

export default App;
