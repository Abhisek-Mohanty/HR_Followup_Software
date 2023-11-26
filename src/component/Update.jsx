import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import style from "./home.module.css";
import * as React from "react";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

const Update = () => {
  let [company, setCompany] = useState("");
  let [loc, setLoc] = useState("");
  let [jobrole, setJobRole] = useState("");
  let [type, setType] = useState("");
  let [oneskill, setOneskill] = useState("");
  let [twoskill, setTwoskill] = useState("");
  let [threeskill, setThreeskill] = useState("");
  let [fourskill, setFourskill] = useState("");
  let [roletype, setRoletype] = useState("");
  let [jobtype, setJobtype] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [interval, setInterval] = useState("");
  let [lastcontact, setLastcontact] = useState("");
  let [nextcontact, setNextcontact] = useState("");
  let [openings, setOpenings] = useState("");
  let [rate, setRate] = useState("");
  let [dis, setDis] = useState("");

  let { xyz } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${xyz}`)
      .then((response) => {
        setCompany(response.data.name);
        setLoc(response.data.location);
        setJobRole(response.data.jobrole);
        setType(response.data.type);
        setOneskill(response.data.oneskill);
        setTwoskill(response.data.twoskill);
        setThreeskill(response.data.threeskill);
        setFourskill(response.data.fourskill);
        setRoletype(response.data.roletype);
        setJobtype(response.data.jobtype);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setInterval(response.data.interval);
        setLastcontact(response.data.lastcontact);
        setNextcontact(response.data.nextcontact);
        setOpenings(response.data.openings);
        setRate(response.data.rate);
        setDis(response.data.dis);
      })
      .catch(() => {
        console.log("error");
      });
  }, [xyz]);
  let companyName = (a) => {
    setCompany(a.target.value);
  };
  let Location = (b) => {
    setLoc(b.target.value);
  };
  let Jobrole = (c) => {
    setJobRole(c.target.value);
  };
  let Jobtype = (d) => {
    setType(d.target.value);
  };
  let Skillone = (e) => {
    setOneskill(e.target.value);
  };
  let Skilltwo = (f) => {
    setTwoskill(f.target.value);
  };
  let Skillthree = (g) => {
    setThreeskill(g.target.value);
  };
  let Skillfour = (h) => {
    setFourskill(h.target.value);
  };
  let Jobtype2 = (i) => {
    setJobtype(i.target.value);
  };
  let Roletype = (j) => {
    setRoletype(j.target.value);
  };
  let Email = (k) => {
    setEmail(k.target.value);
  };
  let Phone = (l) => {
    setPhone(l.target.value);
  };
  let Interval = (m) => {
    setInterval(m.target.value);
  };
  let Lastcontact = (n) => {
    setLastcontact(n.target.value);
  };
  let Nextcontact = (o) => {
    setNextcontact(o.target.value);
  };
  let Openings = (p) => {
    setOpenings(p.target.value);
  };
  let Rate = (q) => {
    setRate(q.target.value);
  };
  let Dis = (r) => {
    setDis(r.target.value);
  };

  let Submit = (m) => {
    m.preventDefault();
    let requestDetails = {
      name: company,
      location: loc,
      jobrole: jobrole,
      type: type,
      oneskill: oneskill,
      twoskill: twoskill,
      threeskill: threeskill,
      fourskill: fourskill,
      jobtype: jobtype,
      roletype: roletype,
      email: email,
      phone: phone,
      interval: interval,
      lastcontact: lastcontact,
      nextcontact: nextcontact,
      openings: openings,
      rate: rate,
      dis: dis,
    };
    axios
      .put(`http://localhost:3000/users/${xyz}`, requestDetails)
      .then(() => {
        console.log("Data sent");
      })
      .catch(() => {
        console.log("Data not sent");
      });
    navigate(`/OneDetail/${xyz}`);
  };

  return (
    <div>
      <div className={style.newBody}>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-4xl font-semibold leading-7 text-gray-900">
                Company Information
              </h2>
              <p className="mt-3 text-l leading-6 text-gray-600">
                Opportunities don't happen, you create them.
              </p>
              <div className="border-t border-gray-900/10 pt-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Company Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="none"
                        value={company}
                        onChange={companyName}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        autoComplete="none"
                        type="text"
                        value={loc}
                        onChange={Location}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Role Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        autoComplete="none"
                        type="text"
                        value={jobrole}
                        onChange={Jobrole}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Choose Company type :
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={type}
                        onChange={Jobtype}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type</option>
                        <option>Startup</option>
                        <option>MNC</option>
                        <option>Mid-Company</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Top One Skill
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="none"
                        value={oneskill}
                        onChange={Skillone}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Top Two Skill
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="none"
                        value={twoskill}
                        onChange={Skilltwo}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Top Three Skill
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="none"
                        value={threeskill}
                        onChange={Skillthree}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Other Skills
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="none"
                        value={fourskill}
                        onChange={Skillfour}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Choose Job type :
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={jobtype}
                        onChange={Jobtype2}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type</option>
                        <option>Work From Home</option>
                        <option>Work From Office</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Choose Role type :
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={roletype}
                        onChange={Roletype}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={Email}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Any Contact Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="number"
                        value={phone}
                        onChange={Phone}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Followup Interval :
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={interval}
                        onChange={Interval}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type</option>
                        <option>4 Days</option>
                        <option>7 Days</option>
                        <option>10 Days</option>
                        <option>14 Days</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Day of Contact
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="date"
                        value={lastcontact}
                        onChange={Lastcontact}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Next Day of Contact
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="region"
                        id="region"
                        autoComplete="none"
                        value={nextcontact}
                        onChange={Nextcontact}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Number of Openings
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="number"
                        value={openings}
                        onChange={Openings}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Rate Based on Interest :
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={rate}
                        onChange={Rate}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description If Any
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        form="usrform"
                        value={dis}
                        onChange={Dis}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button variant="contained" onClick={Submit}>
              Update
            </Button>
          </div>
        </form>
        <div className="w-full h-32"></div>
      </div>
    </div>
  );
};
export default Update;
