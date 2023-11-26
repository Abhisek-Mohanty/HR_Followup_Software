import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import { motion, AnimatePresence } from "framer-motion";

const Details = () => {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold leading-7 text-gray-900 ">
            Application Details
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((x) => {
            return (
              <div>
                <AnimatePresence>
                  <motion.div
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="box"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 800,
                        damping: 15,
                      }}
                    >
                      <Link to={`/OneDetail/${x.id}`}>
                        <Card sx={{ maxWidth: 390 }}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
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
                            <Typography variant="body2" color="text.secondary">
                              {x.dis}
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
                          <CardActions>
                            <div>
                              <Stack spacing={2} direction="cloumn">
                                <Button variant="outlined">Update</Button>{" "}
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => {
                                    deletedata(x.id);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Stack>
                            </div>
                          </CardActions>
                        </Card>
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Details;
