import React from "react";
import { View, Text } from "react-native";

export default function Bars(props) {
  let height = props.Height;
  let compare = props.Compare;
  let swap = props.Swap;
  let backColor =swap ? "rgba(147, 65, 107, 1)" : compare ? "rgb(33,150,243)": "rgb(49,67,128)";
  // rgb(12,18,31)                       //Light Blue                      //Purple                         //pink 
let newWidth = props.iswidth
  return (
    <>
      <View
        style={{
          height: height,
          marginLeft: 2,
          marginRight: 2,
          width: newWidth,
          backgroundColor: backColor,
          borderTopStartRadius:5,
          borderTopEndRadius:5,
        }}
      ></View>
      
    </>
  );
}
