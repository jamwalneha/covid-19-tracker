import React from "react";
import { VectorMap } from "react-jvectormap";

const getdata = (array, key) => {
  var countryData = [];
  array.forEach((obj) => {
    countryData[obj.statecode] = obj.confirmed;
  });
  return countryData[key];
};
const getalldata = (array) => {
  var countryData = [];
  array.forEach((obj) => {
    countryData[`IN-${obj.statecode}`] = obj.confirmed;
  });
  return countryData;
};
//getdata(key) is function that maps code to the value of array (JSON)and it return only value specific state code

const IndiaMap = ({ statewise, setCurrentState }) => {
  return (
    <div>
      <VectorMap
        map={"in_mill"}
        backgroundColor="transparent"
        focusOn={{
          x: 0.5,
          y: 0.5,
          scale: 0,
          animate: false,
        }}
        zoomOnScroll={false}
        containerStyle={{
          width: "80%",
          height: "300px",
          margin:"auto"
        }}
        code
        onRegionTipShow={(_, el, code) =>{
          el.html(el.html() + `: ${getdata(statewise, code.substring(3))}`);
          setCurrentState(code.substring(3));
        }
        }
        onRegionOut={() => setCurrentState("TT")}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#2938bc",
          },
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: getalldata(statewise),
              scale: ["#fdfbee", "#f7f0c4", "#cfcc03"],
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </div>
  );
};
export default IndiaMap;
