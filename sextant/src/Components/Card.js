import React, { useEffect, useState } from "react";
import "./css/Card.css";

const Card = () => {
  const [IPV4, setIPV4] = useState(null);
  const [IPV6, setIPV6] = useState(null);
  const getIPV4 = async () => {
    let response = await fetch("https://api.ipify.org", {
      method: "GET",
    });

    let data = await response.text();
    setIPV4(data);
  };
  const getIPV6 = async () => {
    let response = await fetch("https://api64.ipify.org", {
      method: "GET",
    });

    let data = await response.text();
    setIPV6(data);
  };
  useEffect(() => {
    getIPV4();
    getIPV6();
    //eslint-disable-next-line
  }, []);
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h3>IPV4 Address</h3>
            {console.log(IPV4)}
            <p>{IPV4}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h3>IPV6 Address</h3>
            <p>{IPV6}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h3>Latency</h3>
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
