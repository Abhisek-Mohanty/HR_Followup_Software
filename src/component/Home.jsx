import { Link } from "react-router-dom";
import style from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faAddressBook,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      {/* <h1 className={style.head}>Home</h1> */}
      <div className={style.uppernav}></div>
      <div className={style.nav}>
        <li>
          <Link to="/">
            <div className={style.innericon}>
              <li>
                <FontAwesomeIcon icon={faHouse} style={{ color: "#60818f" }} />
              </li>
              <li> Home</li>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/Dashbord">
            <div className={style.innericon}>
              <li>
                <FontAwesomeIcon icon={faChartLine} />
              </li>
              <li>Dashbord</li>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/New">
            <div className={style.innericon}>
              <li>
                <FontAwesomeIcon icon={faPlus} />
              </li>
              <li>New</li>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/Details">
            <div className={style.innericon}>
              <li>
                <FontAwesomeIcon icon={faAddressBook} />
              </li>
              <li>Details</li>
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Home;
