import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import { motion, AnimatePresence } from "framer-motion";

const Display = () => {
  let [data, setData] = useState([]);
  const [value, setValue] = useState(2);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data);
        setValue(response.data.rate);
        console.log(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  let deletedata = (x) => {
    axios.delete(`http://localhost:3000/users/${x}`);
    window.location.reload("/Details");
  };
  return (
    <div className="bg-white py-24 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Recent Applied</h1>
        {data.map((x) => {
          return (
            <div className="mt-5 w-max">
              <AnimatePresence>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/OneDetail/${x.id}`}>
                    <Card sx={{ maxWidth: 390 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {x.name}{" "}
                          <Chip
                            label={
                              <span>
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="lg"
                                  style={{ color: "#ffd43b" }}
                                />
                                {x.rate}+
                              </span>
                            }
                          />
                          {x.status}
                        </Typography>
                        <Typography component="legend">
                          {x.jobrole}
                          {""} {x.type}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          className="pt-0 mt-0"
                        >
                          <FontAwesomeIcon icon={faLocationDot} size="sm" />{" "}
                          {x.location}
                        </Typography>
                        <Typography
                          variant="overline"
                          display="block"
                          gutterBottom
                        >
                          <p className="text-red-700 font-bold">
                            {x.nextcontact}
                          </p>
                        </Typography>
                        <Typography
                          variant="overline"
                          display="block"
                          gutterBottom
                        >
                          {x.oneskill}, {x.twoskill}, {x.threeskill}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Display;
