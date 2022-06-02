import React, { useEffect } from "react";

const TransportLine = ({ transport, line, setLine, routeHandler }) => {
  // const [nameOfArray, setNameOfArray] = useState([]);
  const transportArrayOfNames = [];
  useEffect(() => {
    transport !== "none" &&
      fetch(`https://api.tfl.gov.uk/Line/Mode/${transport}`)
        .then((res) => res.json())
        .then((data) => {
          transportArrayOfNames.push(...data);
          setLine(transportArrayOfNames.map((obj) => obj.id));
          console.log(line);
          // setNameOfArray(transportArrayOfNames.map((obj) => obj.name));
          // console.log(nameOfArray);
        });
  }, [transport]);

  return (
    <>
      {transport !== "none" && (
        <select onChange={(event) => routeHandler(event)}>
          <option>Choose...</option>
          {line.length === 0 ? (
            <option value="none">No Services found</option>
          ) : (
            line.map((name, index) => {
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })
          )}
        </select>
      )}
    </>
  );
};

export default TransportLine;
