import React from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div>
        <Header/>
        <Dashboard/>
        <Footer/>
      </div>
  );
}

export default App;