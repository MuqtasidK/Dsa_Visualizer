import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Bars from "../Sorting/Bars";
import * as Bubble from "../SortingAlgorithms/BubbleSort";
import * as Insert from "../SortingAlgorithms/InsertSort";
import * as Merge from "../SortingAlgorithms/MergeSort";
import * as Quick from "../SortingAlgorithms/QuickSort";
import * as Heap from "../SortingAlgorithms/HeapSort";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Toast from "react-native-toast-message";
export default function Compare({ navigation }) {
  const [bars1, setBars1] = useState([]);
  const [bars2, setBars2] = useState([]);
  const [barsComp1, setBarsComp1] = useState([]);
  const [barsComp2, setBarsComp2] = useState([]);
  const [len, setlen] = useState(20);
  const [notrespond, setnotrespond] = useState(true);
  const [animateSpeed, setanimateSpeed] = useState(0);
  const [iswidth, setIsWidth] = useState(3);
  const newArray = () => {
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const array4 = [];
    while (array1.length < len) {
      const NewBar = Math.floor(Math.random() * 200) + 20;
      //   console.log(array)
      if (array1.indexOf(NewBar) === -1) {
        array1.push(NewBar);
        array2.push(NewBar);
        array3.push(createBars(NewBar));
        array4.push(createBars(NewBar));
      }
    }
    setBars1(array1);
    setBars2(array2);
    setBarsComp1(array3);
    setBarsComp2(array4);
  };
  useEffect(() => {
    newArray();
    // console.log(NewBar)
  }, [len]);

  //ResetArray
  function resetArray() {
    if (notrespond == true) {
      newArray();
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Please Wait",
        visibilityTime: 1000,
        autoHide: true,
        position: "bottom",
        // bottomOffset:50,
        topOffset: 30,
      });
    }
    console.log("newbars");
  }
  function createBars(height) {
    return {
      HEIGHT: height,
      COMPARE: false,
      SWAP: false,
      CHANGE: false,
    };
  }

  const BubbleSort1 = async () => {
    if (notrespond === true) {
      await Bubble.BubbleSort(
        barsComp1,
        (array) => {
          setBarsComp1(array);
        },
        setnotrespond,
        animateSpeed
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 1000,
        autoHide: true,
        position: "bottom",
        // bottomOffset:50,
        topOffset: 30,
      });
    }
  };
  const BubbleSort2 = async () => {
    if (notrespond === true) {
      await Bubble.BubbleSort(
        barsComp2,
        (array) => {
          setBarsComp2(array);
        },
        setnotrespond,
        animateSpeed
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 1000,
        autoHide: true,
        position: "bottom",
        // bottomOffset:50,
        bottomOffset: 50,
      });
    }
  };

  const InsertSort1 = async () => {
    if (notrespond === true) {
      await Insert.InsertSort(
        barsComp1,
        (array) => {
          setBarsComp1(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };
  const InsertSort2 = async () => {
    if (notrespond === true) {
      await Insert.InsertSort(
        barsComp2,
        (array) => {
          setBarsComp2(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };

  const HeapSort1 = async () => {
    if (notrespond === true) {
      await Heap.HeapSort(
        barsComp1,
        (array) => {
          setBarsComp1(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };
  const HeapSort2 = async () => {
    if (notrespond === true) {
      await Heap.HeapSort(
        barsComp2,
        (array) => {
          setBarsComp2(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };

  const MergeSort1 = async () => {
    if (notrespond === true) {
      await Merge.MergeSort(
        bars1,
        (array) => {
          setBarsComp1(array);
        },
        barsComp1,
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };
  const MergeSort2 = async () => {
    if (notrespond === true) {
      await Merge.MergeSort(
        bars2,
        (array) => {
          setBarsComp2(array);
        },
        barsComp2,
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };
  const QuickSort1 = async () => {
    if (notrespond === true) {
      await Quick.QuickSort(
        barsComp1,
        (array) => {
          setBarsComp1(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };
  const QuickSort2 = async () => {
    if (notrespond === true) {
      await Quick.QuickSort(
        barsComp2,
        (array) => {
          setBarsComp2(array);
        },
        setnotrespond
      );
      setnotrespond(true);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  };

  function compareSort() {
    Algorithm1 === "bubble" ? (
      BubbleSort1()
    ) : Algorithm1 === "quick" ? (
      QuickSort1()
    ) : Algorithm1 === "merge" ? (
      MergeSort1()
    ) : Algorithm1 === "insert" ? (
      InsertSort1()
    ) : Algorithm1 === "heap" ? (
      HeapSort1()
    ) : (
      <></>
    );
    Algorithm2 === "bubble" ? (
      BubbleSort2()
    ) : Algorithm2 === "quick" ? (
      QuickSort2()
    ) : Algorithm2 === "merge" ? (
      MergeSort2()
    ) : Algorithm2 === "insert" ? (
      InsertSort2()
    ) : Algorithm2 === "heap" ? (
      HeapSort2()
    ) : (
      <></>
    );
  }

  // Drop Down Start
  const [isOpen1, setisOpen1] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [Algorithm1, setAlgorithm1] = useState("bubble");
  const [Algorithm2, setAlgorithm2] = useState("bubble");
  const allAlgo1 = [
    { label: "BubbleSort", value: "bubble" },
    { label: "InsertSort", value: "insert" },
    { label: "MergeSort", value: "merge" },
    { label: "QuickSort", value: "quick" },
    { label: "HeapSort", value: "heap" },
  ];
  const allAlgo2 = [
    { label: "BubbleSort", value: "bubble" },
    { label: "InsertSort", value: "insert" },
    { label: "MergeSort", value: "merge" },
    { label: "QuickSort", value: "quick" },
    { label: "HeapSort", value: "heap" },
  ];
  function selectedAlgo1(value) {
    // setAlgorithm(value.label)
    setAlgorithm1(value.value);
    console.log(Algorithm1);
  }
  function selectedAlgo2(value) {
    // setAlgorithm(value.label)
    setAlgorithm2(value.value);
    console.log(Algorithm2);
  }

  function onhandleSpeedChange(slider) {
    if (notrespond == true) {
      setanimateSpeed(slider);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Please Wait",
        visibilityTime: 1000,
        autoHide: true,
        position: "bottom",
        // bottomOffset:50,
        topOffset: 30,
      });
    }
    console.log(animateSpeed);
  }
  // Drop Down End
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "rgb(12,18,31)",
        // marginTop: 5,
      }}
    >
      <View
        style={{
          height: 70,
          width: "100%",
          backgroundColor: "rgb(12,18,31)",
          flexDirection: "row",
          // alignSelf: "center",
          justifyContent: "space-evenly",
          // marginTop: 10,
          zIndex: 1,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={28}
          color="rgb(12,18,31)"
          onPress={() => navigation.navigate("Home")}
          style={{
            alignSelf: "center",
            position: "absolute",
            left: 10,
            // paddingTop: 4,
            backgroundColor: "rgb(9,115,165)",
            borderRadius: 20,
          }}
        />

        <View style={{ left: 10, zIndex: 1 }}>
          <DropDownPicker
            items={allAlgo1}
            open={isOpen1}
            value={Algorithm1}
            setOpen={() => setisOpen1(!isOpen1)}
            style={{
              width: 130,
              backgroundColor: "rgb(12,18,31)",
              left: 15,
              borderColor: "rgb(9,115,165)",
              borderWidth: 1,
              borderRadius: 0,
              top: 10,
            }}
            arrowIconStyle={{
              backgroundColor: "rgb(9,115,165)",
              borderRadius: 10,
            }}
            setValue={(val) => setAlgorithm1(val)}
            maxHeight={200}
            autoScroll
            placeholder="Algorithm"
            textStyle={{ color: "white" }}
            dropDownContainerStyle={{
              width: 130,
              backgroundColor: "rgb(9,115,165)",
              left: 15,
            }}
            // onPress={}
            onSelectItem={(value) => selectedAlgo1(value)}
            selectedItemContainerStyle={{
              backgroundColor: "rgb(8,13,22)",
              color: "white",
            }}
            tickIconStyle={{ backgroundColor: "white", borderRadius: 10 }}
          />
        </View>
        <TouchableOpacity style={styles.play} onPress={compareSort}>
          <Text style={{ color: "white", alignSelf: "center" }}>COMPARE</Text>
          <FontAwesome
            name="play-circle"
            size={23}
            color="rrgb(9,115,165)"
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={resetArray} style={styles.allBtns}>
          <Text style={{ color: "white" }}>ResetArray</Text>
        </TouchableOpacity>
        <View style={{ left: 10, height: 30 }}>
          <DropDownPicker
            items={allAlgo2}
            open={isOpen2}
            value={Algorithm2}
            setOpen={() => setisOpen2(!isOpen2)}
            style={{
              width: 130,
              backgroundColor: "rgb(12,18,31)",
              left: 15,
              borderColor: "rgb(9,115,165)",
              borderWidth: 1,
              borderRadius: 0,
              top: 10,
            }}
            arrowIconStyle={{
              backgroundColor: "rgb(9,115,165)",
              borderRadius: 10,
            }}
            setValue={(val) => setAlgorithm2(val)}
            maxHeight={200}
            autoScroll
            placeholder="Algorithm"
            textStyle={{ color: "white" }}
            dropDownContainerStyle={{
              width: 130,
              backgroundColor: "rgb(9,115,165)",
              left: 15,
            }}
            // onPress={}
            onSelectItem={(value) => selectedAlgo2(value)}
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
          justifyContent: "center",
          bottom: 4,
          borderWidth: 1,
          borderColor: "rgb(9,115,165)",
          alignSelf: "center",
          zIndex: 1,
          backgroundColor: "rgb(12,18,31)",
        }}
      >
        <Slider
          style={{
            width: 200,
            height: 20,
            alignSelf: "center",
            backgroundColor: "rgb(12,18,31)",
            // bottom:10,
          }}
          minimumValue={0}
          maximumValue={2}
          minimumTrackTintColor="rgb(9,115,165)"
          maximumTrackTintColor="white"
          step={1}
          onValueChange={onhandleSpeedChange}
          maximumTrackTintWidth="20%"
          thumbTintColor="white"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ color: "white", right: 15 }}>Slow</Text>
          <Text style={{ color: "white" }}>Medium</Text>
          <Text style={{ color: "white", left: 15 }}>Fast</Text>
        </View>
      </View>

      <View style={styles.compareMainDiv}>
        <View style={styles.compareDiv}>
          <View style={[styles.allBars, {}]}>
            {barsComp1.map(({ HEIGHT, COMPARE, SWAP, CHANGE }) => (
              <View key={HEIGHT}>
                <Bars
                  key={HEIGHT}
                  Height={HEIGHT}
                  Compare={COMPARE}
                  Swap={SWAP}
                  iswidth={iswidth}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.compareDiv}>
          <View
            style={[
              styles.allBars,
              {
                borderLeftColor: "rgb(9,115,165)",
                borderLeftWidth: 1,
              },
            ]}
          >
            {barsComp2.map(({ HEIGHT, COMPARE, SWAP, CHANGE }) => (
              <View key={HEIGHT}>
                <Bars
                  key={HEIGHT}
                  Height={HEIGHT}
                  Compare={COMPARE}
                  Swap={SWAP}
                  iswidth={iswidth}
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      <Toast style={{ backgroundColor: "white", zIndex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  compareMainDiv: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    height: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  compareDiv: {
    padding: 10,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    // display: "flex",
    backgroundColor: "rgb(12,18,31)",
    borderTopColor: "rgb(9,115,165)",
    borderTopWidth: 1,
    bottom: 30,
  },
  allBars: {
    height: 200,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
    bottom: 30,
  },
  buttonDiv: {
    width: "50%",
    height: 50,
    margin: 8,
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    width: "50%",
  },
  play: {
    flexDirection: "row",
    color: "white",
    padding: 5,
    borderRadius: 0,
    borderWidth: 1,
    justifyContent: "space-evenly",
    width: 120,
    height: 40,
    backgroundColor: "rgb(12,18,31)",
    borderColor: "rgb(9,115,165)",
    // alignSelf: "center",
    top: 12,
  },
  allBtns: {
    color: "white",
    backgroundColor: "rgb(8,13,22)",
    padding: 8,
    borderRadius: 0,
    borderColor: "rgb(9,115,165)",
    borderWidth: 1,
    top: 12,
    height: 40,
  },
});
