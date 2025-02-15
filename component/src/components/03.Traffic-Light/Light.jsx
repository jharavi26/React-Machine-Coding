import React, { useEffect, useState } from 'react';
import "./Light.css";

function Light() {
  const [current, setCurrent] = useState(0);
  const lights = ["red", "yellow", "green"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lights.length);
    }, current === 0 ? 3000 : 2000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="traffic-light">
      {lights.map((light, index) => (
        <div 
          key={light} 
          className={`light ${light} ${current === index ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
}

export default Light;