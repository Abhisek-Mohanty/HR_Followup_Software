import style from "./home.module.css";
import Count from "./Features/Dashbordcomp/Count";
import Locationpie from "./Features/Dashbordcomp/LocationChart/Locationpie";
import Display from "./Features/Dashbordcomp/Display";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Typecom from "./Features/Dashbordcomp/Typecom";
const Dashbord = () => {
  return (
    <div className={style.Dash}>
      <CardContent>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          className={style.DH}
        >
          Dashbord
        </Typography>
      </CardContent>
      <div className={style.mainhome}>
        <Count />
      </div>
      <div className={style.DisDash}>
        <Display />
      </div>
      <div className={style.locDash}>
        <h3>Application Based on Locations</h3>
        <Locationpie />
      </div>
      <div className={style.compie}>
        <h3>Application Based on Company Size</h3>
        <Typecom />
      </div>
    </div>
  );
};

export default Dashbord;
