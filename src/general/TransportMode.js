import React from "react";

const TransportMode = ({ showData, transportHandler, transport }) => {
  return (
    <>
      <select value={transport} onChange={(event) => transportHandler(event)}>
        <option value="none">select your transport</option>
        {showData.map((obj, id) => {
          return (
            <option key={id} value={obj.modeName}>
              {obj.modeName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default TransportMode;
