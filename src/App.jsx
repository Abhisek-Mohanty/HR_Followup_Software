import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./component/Details";
import New from "./component/New";
import Home from "./component/Home";
import OneDetail from "./component/OneDetails";
import Update from "./component/Update";
import Dashbord from "./component/Dashbord";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route element={<Dashbord />} path="/Dashbord"></Route>
          <Route element={<New />} path="/new"></Route>
          <Route element={<Details />} path="/Details"></Route>
          <Route element={<OneDetail />} path="/OneDetail/:abc"></Route>
          <Route element={<Update />} path={`/update/:xyz`}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
