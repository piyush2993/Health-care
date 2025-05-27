import "../styles/Dashboard.css";

const cardData = [
  { title: "Lungs", date: "26 Oct 2021", color: "#FF6B6B" },
  { title: "Teeth", date: "26 Oct 2021", color: "#4BE4C3" },
  { title: "Bone", date: "26 Oct 2021", color: "#FF8C42" },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {cardData.map((item) => (
        <div key={item.title} className="health-card">
          <div className="icon">
            {item.title === "Lungs"
              ? "🫁"
              : item.title === "Teeth"
              ? "🦷"
              : "🦴"}
          </div>
          <div className="text">
            <p className="title">{item.title}</p>
            <p className="date">Date: {item.date}</p>
            <div className="bar-bg">
              <div
                className="bar"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
