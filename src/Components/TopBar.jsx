import avatar2 from "../images/avatar.png";
import { MdAddBox } from "react-icons/md";
import { FaBell } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="top-bar">
      <article className="top-logo">
          <span className="logo-highlight">Health</span>
          <span className="logo-dark">care.</span>
      </article>
      <article className="top-search a">
        <input type="text" id="search" placeholder="Search" />
        <FaBell className="button" />
      </article>
      <article className="top-avatar a">
        <img src={avatar2} alt="avatar" />
        <MdAddBox className="img" />
      </article>
    </div>
  );
};

export default TopBar;
