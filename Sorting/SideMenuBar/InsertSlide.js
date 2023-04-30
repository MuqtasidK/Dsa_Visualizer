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
          Insert Sort
        </Text>
        <Text style={{ color: "rgba(181, 180, 180, 1)", top: 10 }}>
          Insert Sort is the simple sorting algorithm that builds the sorted
          array one element at a time. The elements from the unsorted part are
          picked and placed at the correct position in the sorted part
        </Text>
      </View>
      <View
        style={{
          marginTop: 80,
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
            Average Case: O(n²) {"\n"}
            Best Case: O(n)
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
          <Text style={{ left: 10, color: Textcolor, top: 15 }}>
            {` function InsertSort(bars) {
  for (var i = 1; i < bars.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (bars[j] > bars[i]) {
        Insert(bars, j, i,bars);    
        j = i + 1;
      }
    }
  }
}
function Insert(array, idx1, idx2,bars) {
  let temp1 = array[idx1];
  let temp2 = array[idx2];
  for (let i = idx2; i > idx1; i--) {
    array[i] = array[i - 1];
  }
  array[idx1] = temp2;
  array[idx1 + 1] = temp1;
}
function printArray(arr,size){
  var i ;
  for(i = 0; i< size; i++){
    console.log(arr[i]);
  }
}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
var n = array.length;
 InsertSort(array);
printArray(array,n)
  `}
          </Text>

          <View style={{ flexDirection: "column", right: 10 }}>
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
            <AntDesign
              name="copy1"
              size={24}
              color="black"
              onPress={""}
              style={{
                backgroundColor: "rgba(147, 65, 107, 1)",
                height: 38,
                width: 38,
                borderRadius: 20,
                paddingLeft: 8,
                paddingTop: 7,
                // right: 62,
                top: 20,
              }}
            />
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
    bottom:30
  },
});
