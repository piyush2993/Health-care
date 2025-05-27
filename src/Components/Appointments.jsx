import "../styles/Appointments.css";
const Appointments = ({ schedule }) => {
  return (
    <div className="appointment">
      <div className="sec-1 top-cards">
        <div className="cards card-dentist">
          <span>
            Dentist{" "}
            <span role="img" aria-label="tooth">
              🦷
            </span>
          </span>
          <span>09:00-11:00</span>
          <span>Dr. Cameron Williamson</span>
        </div>
        <div className="cards card-physio">
          <span>
            Physiotherapy Appointment{" "}
            <span role="img" aria-label="muscle">
              💪
            </span>
          </span>
          <span>11:00-12:00</span>
          <span>Dr. Kevin Djones</span>
        </div>
      </div>
      <h2>The Upcoming Schedule</h2>
      {schedule.map((group) => (
        <div key={group.day} className="card1">
          <h3>On {group.day}</h3>
          <div className="sec-1">
            {group.appointments.map((appt, idx) => (
              <div key={idx} className="cards">
                <span>
                  {appt.title} {appt.icon}
                </span>
                <span>{appt.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
