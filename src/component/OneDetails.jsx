import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import style from "./home.module.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const OneDetail = () => {
  let [data, setData] = useState("");
  const [value, setValue] = useState(2);
  let { abc } = useParams();
  console.log(abc);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${abc}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setValue(response.data.rate);
      })
      .catch(() => {
        console.log("error");
      });
  }, [abc]);
  let deletedata = (x) => {
    axios.delete(`http://localhost:3000/users/${x}`);
    navigate("/Details");
  };
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 1600 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={`https://source.unsplash.com/1600x1080/?software`}
          />
        </Card>
        <div className={style.MainOneBody}>
          <CardContent>
            <Typography variant="h2" gutterBottom component="div">
              <h1>{data.name}</h1>
            </Typography>
          </CardContent>
        </div>
        <div className={style.subBody}>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-xl font-medium leading-6 text-gray-900 ml-4">
                  Application for
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.jobrole}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-xl font-medium leading-6 text-gray-900 ml-4">
                  Status
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.status}
                </dd>
              </div>

              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Rate based on Interest
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Rating name="read-only" value={value} readOnly />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Location
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <h5>{data.location}</h5>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Type of Company
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <h5>{data.type}</h5>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Type of Job
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <h5>{data.jobtype}</h5>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Must Have Skills
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.oneskill}, {data.twoskill},{data.threeskill}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Goot to Have Skills
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.fourskill}</p>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Companey Email
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.email}</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Companey Phone number
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.phone}</p>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Number of Opennings
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.openings}</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Role Type
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.roletype}</p>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Interval of Follow up
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.interval}</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Last date Contact
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.lastcontact}</p>
                </dd>
              </div>
              <div className="bg-slate-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Next date Contact
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.nextcontact}</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="ml-4 text-xl font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-l leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>{data.dis}</p>
                </dd>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Link to={`/update/${data.id}`}>
                    <Button variant="contained">Update</Button>
                  </Link>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      deletedata(data.id);
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Stack>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p>Last Contact : </p>
        <p>Inerval : </p>
        <p>Next Contact : </p>
      </div>
      <div>
        <p>Openings : </p>
      </div>
      <Link to={`/update/${data.id}`}>Update</Link>
      <button
        onClick={() => {
          deletedata(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default OneDetail;
