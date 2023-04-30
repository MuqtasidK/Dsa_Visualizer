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
          Quick Sort
        </Text>
        <Text style={{ color: "rgba(181, 180, 180, 1)", top: 10 }}>
          QuickSort is a divide and conquer algorithm, which picks an elemnt
          from the given array as a pivot and partitions the given array around
          the chosen pivot.
        </Text>
      </View>
      <View
        style={{
          marginTop: 120,
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
            Wort Case: O(n²) {"\n"}
            Average Case: O(nlogn) {"\n"}
            Best Case: O(nlogn)
          </Text>
        </View>
        <View>
          <Text style={{ color: "grey" }}>Space Complexity:</Text>
          <Text style={{ color: "rgba(190, 190, 190, 1)", top: 10 }}>
            Wort Case: O(logn)
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
            height: "85%",
            borderWidth: 2,
            borderColor: "white",
            backgroundColor: color,
            flexDirection: "row",
            borderRadius: 5,
          }}
        >
          <Text style={{ left: 10, color: Textcolor, top: 15 }}>
            {` function QuickSort(bars) {
  for (var i = 0; i < bars.length - 1; i++) {
    for (var j = i + 1; j < bars.length; j++) {
      if (bars[i] > bars[j]) {
        let temp = bars[i];
        bars[i] = bars[j];
        bars[j] = temp;
      }
    }
  }
}
function printArray(arr,size){
  var i ;
  for(i = 0; i< size; i++){
    console.log(arr[i]);
  }
}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
var n = array.length;
 QuickSort(array);
printArray(array,n)
  `}
          </Text>

          <View style={{ flexDirection: "column",left:10 }}>
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
    marginTop: 40,
    bottom: 30,
  },
});
