import React, { useEffect, useState } from "react";
import "./css/Card.css";

const Card = ({IPV4,IPV6,latency}) => {
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h3>IPV4 Address</h3>
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
            <p>{latency}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
