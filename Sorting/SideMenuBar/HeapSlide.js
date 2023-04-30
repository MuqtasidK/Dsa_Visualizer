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
      <View style={{ height: 70,top:16 }}>
        <Text style={{ color: "rgba(147, 65, 107, 1)", fontSize: 20 }}>
          Heap Sort
        </Text>
        <Text style={{ color: "rgba(181, 180, 180, 1)", top: 10 }}>
          Heap Sort is a comparison-based sorting technique based on Binary Heap
          data structure. It maintains the unsorted region in a heap data
          structure to more quickly find the largest element in each step and
          place the element at the end.
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
            Wort Case: O(1)
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
          <Text style={{ left: 10, color: Textcolor, top: 5 }}>
            {` function heapSort(array) {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); 
  i >= 0; i--)
    heapify(array, size, i)

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp
    heapify(array, i, 0)
  }
}
function heapify(array, size, i) {
  let max = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < size && array[left] > array[max])
    max = left
  if (right < size && array[right] > array[max])
    max = right
  if (max != i) {
    let temp = array[i]
    array[i] = array[max]
    array[max] = temp
    heapify(array, size, max)
  }
}
  `}
          </Text>

          <View style={{ flexDirection: "column", right: 15}}>
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
    alignSelf: "center",
    flexDirection: "column",
    flex: 1,
    marginTop: 20,
    bottom: 30,
  },
});
