import "../styles/Dashboard.css";
import bodyImg from "../images/body.jpg";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src={bodyImg} alt="Human Body" className="anatomy-image" />
      <div className="indicator heart">❤️ Healthy Heart</div>
      <div className="indicator leg">🦵 Healthy Leg</div>
    </div>
  );
};

export default AnatomySection;
