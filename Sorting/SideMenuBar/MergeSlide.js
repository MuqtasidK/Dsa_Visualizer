import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function InsertSlide() {
  const [color, setColor] = useState("white");
  const [Textcolor, setTextColor] = useState("rgba(147, 65, 107, 1)");
  function changeColor() {
    if (color == "white") {
      setColor("grey");
      setTextColor("rgba(208, 205, 205, 1)");
    } else {
      setColor("white");
      setTextColor("rgba(147, 65, 107, 1)");
    }
  }
  // const [copiedText, setCopiedText] = useState(BBcode);
  // const copyToClipboard = async () => {
  //   await Clipboard.setStringAsync('hello world');
  //   console.log(board)
  // };

  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getStringAsync();
  //   setCopiedText(text);
  // };
  return (
    <View style={styles.container}>
      <View style={{ height: 70 }}>
        <Text style={{ color: "rgba(147, 65, 107, 1)", fontSize: 20 }}>
          Merge Sort
        </Text>
        <Text style={{ color: "rgba(181, 180, 180, 1)", top: 10 }}>
          Merge Sort is a divide and conquer algorithm. Which first divides the
          given input array into two halves, calling itself for the two halves,
          and then merging the two sorted halves.
        </Text>
      </View>
      <View
        style={{
          marginTop: 90,
          flexDirection: "row",
          justifyContent: "space-between",
          height: 100,
          marginBottom: 10,
          flexWrap: "wrap",
        }}
      >
        {/* n² */}
        <View>
          <Text style={{ color: "grey" }}>Time Complexity:</Text>
          <Text style={{ color: "rgba(190, 190, 190, 1)", top: 10 }}>
            Wort Case: O(nlogn) {"\n"}
            Average Case: O(nlogn) {"\n"}
            Best Case: O(nlogn)
          </Text>
        </View>
        <View>
          <Text style={{ color: "grey" }}>Space Complexity:</Text>
          <Text style={{ color: "rgba(190, 190, 190, 1)", top: 10 }}>
            Wort Case: O(n)
          </Text>
        </View>
      </View>
      <Text
        style={{ color: "rgba(147, 65, 107, 1)", marginTop: 2, height: 30 }}
      >
        JavaScript
      </Text>
      <View style={{ flex: 1, width: "100%" }}>
        {/* <Button title="dark" onPress={changeColor}/> */}
        <View
          style={{
            width: "100%",
            height: "100%",
            borderWidth: 2,
            borderColor: "white",
            backgroundColor: color,
            flexDirection: "row",
            borderRadius: 5,
          }}
        >
          <Text style={{ left: 10, color: Textcolor ,top:15}}>
            {`function mergeSort(array) {
  const half = array.length / 2

  if (array.length < 2){
    return array
  }

const left = array.splice(0, half)
return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}
  `}
          </Text>

          <View style={{ flexDirection: "column", right: 50 }}>
            {color === "white" ? (
              <FontAwesome
                name="moon-o"
                size={22}
                color="rgba(147, 65, 107, 1)"
                onPress={changeColor}
                style={{
                  backgroundColor: "grey",
                  height: 38,
                  width: 38,
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingTop: 6,
                  // right: 25,
                  top: 10,
                }}
              />
            ) : (
              <Feather
                name="sun"
                size={22}
                color="white"
                onPress={changeColor}
                style={{
                  backgroundColor: "rgba(147, 65, 107, 1)",
                  height: 38,
                  width: 38,
                  borderRadius: 20,
                  paddingLeft: 8,
                  paddingTop: 7,
                  // right: 25,
                  top: 10,
                }}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "100%",
    // backgroundColor: "white",
    alignSelf: "center",
    // marginTop: 50,
    flexDirection: "column",
    flex: 1,
    // flexWrap:'wrap'
    // justifyContent: "space-around",
    marginTop: 40,
    bottom: 30,
  },
});
