import React from "react";
import Layout from "../containers/layout";
import Login from "../containers/login";
import RecoveryPassword from "../containers/recoverypassword";
import "../styles/global.css";

const App = () => {
  return (
    <Layout>
      <Login />
      <RecoveryPassword />
    </Layout>
  );
};

export default App;
