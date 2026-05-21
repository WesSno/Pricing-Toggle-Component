import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/mainContent";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    fetch("/pricingData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const toggled = () => {
    setIsToggle((prevState) => !prevState);
  };

  console.log(isToggle);

  return (
    <div className="app">
      <div className="top-bg">
        <img src="./images/bg-top.svg" alt="top background pattern" />
      </div>
      <Header isToggle={isToggle} toggled={toggled} />

      <Content pricingData={data} isToggle={isToggle} />

      <div className="bottom-bg">
        <img src="./images/bg-bottom.svg" alt="bottom background pattern" />
      </div>
    </div>
  );
}

export default App;
