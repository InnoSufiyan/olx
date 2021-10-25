import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

import { useState } from "react";

function App() {
  const [registration, setRegistration] = useState(false);

  const [user, setUser] = useState()


  const updateUser = (userObj) => {
    setUser(userObj)
  }

  const gotoLogin = (param) => {
    setRegistration(param);
  };

  return (
    <>
      {registration ? <Login title={gotoLogin} updateUser={updateUser} /> : <Signup title={gotoLogin} />}
      <Dashboard />
    </>
  );
}

export default App;
