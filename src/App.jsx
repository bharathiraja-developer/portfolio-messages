import axios from "axios";
import React, { useEffect, useState } from "react";
import Msg from "./Msg";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfolio-backend-iogk.onrender.com/api/")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h2 className="mt-3">Messages</h2>
      </div>
      <div className="row mt-4">
        {data.map((item) => {
          return <Msg name={item.name} email={item.email} msg={item.message} />;
        })}
      </div>
    </div>
  );
}

export default App;
