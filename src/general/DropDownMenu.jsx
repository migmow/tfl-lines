import React, { useState, useEffect } from "react";
import EachLineMap from "./EachLineMap";
import TransportLine from "./TransportLine";
import TransportMode from "./TransportMode";

const DropdownMenu = () => {
  const [showData, setShowData] = useState([]);
  const [transport, setTransport] = useState("none");
  const [line, setLine] = useState([]);
  const [route, setRoute] = useState("");
  const [routeInfo, setRouteInfo] = useState("");

  const transportHandler = (event) => {
    setTransport(event.target.value);
  };
  const routeHandler = (event) => {
    setRouteInfo("");
    setRoute(event.target.value);
  };

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
      .then((res) => res.json())
      .then((data) => setShowData(data));
  }, []);

  return (
    showData.length !== 0 && (
      <div>
        <TransportMode
          showData={showData}
          transportHandler={transportHandler}
          transport={transport}
        ></TransportMode>
        <TransportLine
          routeHandler={routeHandler}
          transport={transport}
          line={line}
          setLine={setLine}
        />
        <EachLineMap
          line={line}
          setRoute={setRoute}
          route={route}
          routeInfo={routeInfo}
          setRouteInfo={setRouteInfo}
          transport={transport}
        />
      </div>
    )
  );
};

export default DropdownMenu;
