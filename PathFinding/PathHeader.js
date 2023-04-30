import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import Slider from "@react-native-community/slider";
import { FontAwesome } from "@expo/vector-icons";
export default function PathHeader({
  onAstar,
  onDijkstra,
  onBiDijkstra,
  onBfs,
  onDfs,
  onRandom,
  onClear,
  navigation,
  onhandleSpeedChange,
  disable
}) {
  const allAlgo = [
    { label: "Astar", value: "star" },
    { label: "BFS", value: "bfs" },
    { label: "DFS", value: "dfs" },
    { label: "Dijkstra", value: "dijkstra" },
    { label: "Bidikstra", value: "bdd" },
  ];
  const [isOpen, setisOpen] = useState(false);
  const [Algorithm, setAlgorithm] = useState("star");
  function selectedAlgo(value) {
    // setAlgorithm(value.label)
    setAlgorithm(value.value);
    console.log(Algorithm);
  }
  return (
    <View
      style={{
        height: 110,
        width: "100%",
        backgroundColor: "rgb(12,18,31)",
        zIndex: 1,
        bottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // alignSelf: "center",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={25}
          color="rgb(12,18,31)"
          onPress={() => navigation.navigate("Home")}
          style={styles.arrow}
        />
        <View
          style={{
            width: 250,
            alignSelf: "center",
            borderWidth: 2,
            borderColor: "rgb(85,60,163)",
            height: 43,
            bottom: 5,
          }}
        >
          <Slider
            style={{
              width: 250,
              // height: 50,
              top:3
            }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="rgb(85,60,163)"
            maximumTrackTintColor="white"
            step={1}
            onValueChange={(value) => onhandleSpeedChange(value)}
            maximumTrackTintWidth="20%"
            upperLimit={48}
            thumbTintColor="white"
            disabled={disable}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 10,
              width: 250,
            }}
          >
            <Text style={{ color: "white", right: 15 }}>Slow</Text>
            <Text style={{ color: "white" }}>Medium</Text>
            <Text style={{ color: "white", left: 15 }}>Fast</Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", left: 40,zIndex:1 }}>
          <DropDownPicker
            items={allAlgo}
            open={isOpen}
            value={Algorithm}
            setOpen={() => setisOpen(!isOpen)}
            style={{
              width: 120,
              backgroundColor: "rgb(8,13,22)",
              left: 15,
              borderColor: "rgb(85,60,163)",
              borderWidth: 1,
            }}
            arrowIconStyle={{
              backgroundColor: "rgb(85,60,163)",
              borderRadius: 10,
            }}
            setValue={(val) => setAlgorithm(val)}
            maxHeight={200}
            autoScroll
            placeholder="Algorithm"
            textStyle={{ color: "white" }}
            dropDownContainerStyle={{
              width: 120,
              backgroundColor: "rgb(50,31,110)",
              left: 15,
            }}
            // onPress={}
            onSelectItem={(value) => selectedAlgo(value)}
            selectedItemContainerStyle={{
              backgroundColor: "rgb(8,13,22)",
              color: "white",
            }}
            tickIconStyle={{ backgroundColor: "white", borderRadius: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignSelf: "center",
          width: 450,
          left: 10,
          top: 7,
        }}
      >
        <TouchableOpacity
          style={styles.play}
          onPress={() =>
             Algorithm === "star" ? (
              onAstar()
            ) : Algorithm === "dfs" ? (
              onDfs()
            ) : Algorithm === "bfs" ? (
              onBfs()
            ) : Algorithm === "dijkstra" ? (
              onDijkstra()
            ) :Algorithm === "bdd" ? (
              onBiDijkstra()
            ) : (
              <View></View>
            )
          }
          
          disabled={disable}
        >
          <Text style={{ color: "white", alignSelf: "center" }}>Play</Text>
          <FontAwesome
            name="play-circle"
            size={20}
            color="rgb(85,60,163)"
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={() => onClear()} 
          disabled={disable}>
          <Text style={[styles.allBtns, { width: 100, textAlign: "center" }]}>
            Clear Grid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onRandom()} 
          disabled={disable}>
          <Text style={styles.allBtns}>Random Walls</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allBtns: {
    color: "white",
    backgroundColor: "rgb(8,13,22)",
    padding: 8,
    // borderRadius: 8,
    borderColor: "rgb(85,60,163)",
    borderWidth: 1,
  },
  container: {
    backgroundColor: "rgba(108, 99, 255, 1)",
    width: "80%",
    alignSelf: "center",
    height: 100,
  },
  arrow: {
    alignSelf: "center",
    position: "absolute",
    left: 20,
    backgroundColor: "rgb(85,60,163)",
    borderColor: "rgb(85,60,163)",
    // borderWidth: 1,
    borderRadius: 15,
    padding: 3,
  },
  play: {
    borderColor: "white",
    flexDirection: "row",
    color: "white",
    backgroundColor: "rgb(8,13,22)",
    padding: 8,
    // borderRadius: 8,
    borderColor: "rgb(85,60,163)",
    borderWidth: 1,
    justifyContent: "space-evenly",
    width: 100,
    left: 10,
  },
});
