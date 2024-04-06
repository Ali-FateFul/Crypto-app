import React from "react";
import HomePage from "./Components/Templates/HomePage";
import Layout from "./Layouts/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default App;
