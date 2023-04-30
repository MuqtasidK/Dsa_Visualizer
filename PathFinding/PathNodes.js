// import { View, Text, StyleSheet, Pressable } from "react-native";
// import React from "react";

// export default function PathNodes({
//   handleMouseDown,
//   handleMouseEnter,
//   handleMouseUp,
//   col,
//   row,
//   iswall,
//   isstart,
//   isfinish,
//   isvisited,
//   ispath,
//   allnodes,
// }) {
//   let nodeColor = isstart
//     ? "red"
//     : isfinish
//     ? "green"
//     : iswall
//     ? "#A58BF34D"
//     : ispath
//     ? "black"
//     : isvisited
//     ? "yellow"
//     : "#BFAEF5BE";
//   return (
//     <View>
//       <Pressable
//         style={{
//           backgroundColor: nodeColor,
//           aspectRatio: 1 / 1,
//           borderWidth: 1,
//           borderColor: "#3d0c8d",
//           width: 12,

//         }}
//         onTouchStart={() => handleMouseDown(row, col)}
//         onHoverIn={() => {
//           console.log("mouse moved");
//           handleMouseEnter(row, col);
//         }}
//         // onMouseMove={()=>{
//         //   console.log("mouse moved")
//         // }}
//         onTouchEnd={() => {
//           handleMouseUp();
//         }}
//       ></Pressable>
//       {/* <View
//         style={{
//           backgroundColor: wallColor,
//           aspectRatio: 1 / 1,
//           borderWidth: 1,
//           borderStyle: "solid",
//           borderColor: "blue",
//           width: 25,
//         }}
//         onStartShouldSetResponder={() => true}
//         onPointerDown={()=>{
//           console.log("kkk")}
//         }
//       ></View> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   boxes: {
//     aspectRatio: 1 / 1,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "blue",
//     width: 25,
//     // height:
//   },
// });
// // import "./nodes.css";
// // import React, { Component } from "react";

// // export default class Nodes extends Component {

// // shouldComponentUpdate(nextProps){
// //   if(nextProps.iswall !== this.props.iswall) return true
// //   if(nextProps.isvisited !== this.props.isvisited) return true
// //   if(nextProps.isstart !== this.props.isstart) return true
// //   if(nextProps.isfinish !== this.props.isfinish) return true
// //   if(nextProps.row !== this.props.row) return true
// //   if(nextProps.col !== this.props.col) return true
// //   return false
// // }



import { Text, View,StyleSheet,Pressable } from "react-native";
import React, { Component } from "react";

export default class PathNodes extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.iswall !== this.props.iswall) return true;
    if (nextProps.isvisited !== this.props.isvisited) return true;
    if (nextProps.isstart !== this.props.isstart) return true;
    if (nextProps.isfinish !== this.props.isfinish) return true;
    if (nextProps.ispath !== this.props.ispath) return true;
    if (nextProps.row !== this.props.row) return true;
    if (nextProps.col !== this.props.col) return true;
    return false;
  }
  render() {
    const { row,col,ispath, isstart,isfinish,iswall,isvisited,handleMouseDown,handleMouseEnter,handleMouseUp} = this.props;
    let nodeColor = isstart
    ? "red"
    : isfinish
    ? "green"
    : iswall
    ? "#A58BF34D"
    : ispath
    ? "black"
    : isvisited
    ? "rgb(140,110,234)"
    : "rgb(145,135,191)";
    return (
      <View>
        <Pressable
        style={{
          backgroundColor: nodeColor,
          aspectRatio: 1 / 1,
          borderWidth: 1,
          borderColor: "#3d0c8d",
          width: 18,

        }}
        onTouchStart={() => handleMouseDown(row, col)}
        
        // onTouch={()=>handleMouseEnter(row,col)}
        onResponderMove={()=>console.log('moving')}
        onTouchEnd={() => {
          handleMouseUp();
        }}
        on
      ></Pressable>
       {/* <View
        style={{
          backgroundColor: wallColor,
          aspectRatio: 1 / 1,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "blue",
          width: 25,
        }}
        onStartShouldSetResponder={() => true}
        onPointerDown={()=>{
          console.log("kkk")}
        }
      ></View>  */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxes: {
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    width: 40,
    // height:
  },
});