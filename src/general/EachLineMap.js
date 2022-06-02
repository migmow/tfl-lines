import React, { useEffect } from "react";

const EachLineMap = ({ transport, line, route, routeInfo, setRouteInfo }) => {
  useEffect(() => {
    if (line.length !== 0) {
      fetch(`https://api.tfl.gov.uk/Line/${route}/Route`)
        .then((res) => res.json())
        .then((data) => {
          setRouteInfo(data);
        });
    }
  }, [route]);
  return (
    routeInfo !== "" && (
      <>
        <div>
          {transport}: {route}
        </div>
        <div>
          <h1>START OF LINE</h1>
          <p>{routeInfo.routeSections[0].originationName}</p>
        </div>
        <div>
          <h1>END OF LINE</h1>
          <p>{routeInfo.routeSections[0].destinationName}</p>
        </div>
      </>
    )
  );
};

export default EachLineMap;
