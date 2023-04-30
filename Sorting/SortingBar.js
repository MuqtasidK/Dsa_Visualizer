import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Platform,
  StatusBar,
} from "react-native";
import { Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SideMenu from "./SideMenu";
import Toast from "react-native-toast-message";
import React, { useState, useEffect, useRef } from "react";
import * as Bubble from "../SortingAlgorithms/BubbleSort";
import * as Insert from "../SortingAlgorithms/InsertSort";
import * as Merge from "../SortingAlgorithms/MergeSort";
import * as Quick from "../SortingAlgorithms/QuickSort";
import * as Heap from "../SortingAlgorithms/HeapSort";
import Bars from "./Bars";
import MergeSlide from "./SideMenuBar/MergeSlide";
import BubbleSlide from "./SideMenuBar/BubbleSlide";
import InsertSlide from "./SideMenuBar/InsertSlide";
import HeapSlide from "./SideMenuBar/HeapSlide";
import QuickSlide from "./SideMenuBar/QuickSlide";
import ToggleSwitch from "toggle-switch-react-native";
//Slider start//
const { height: WINDOW_HEIGHT } = Dimensions.get("screen");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 1.32;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.3;
const MAX_UPWARD_TRANSLATE_Y = -900; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 0;
//Slider End//

export default function SortingBar({ navigation }) {
  //Slider Main
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        }
      },
    })
  ).current;

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  //Slider Main end //
  const [bars, setBars] = useState([]);
  const [barsComp, setBarsComp] = useState([]);
  const [animateSpeed, setanimateSpeed] = useState(0);
  const [len, setlen] = useState(10);
  const [Algorithm, setAlgorithm] = useState("Bubble Sort");
  const [isSorted, setIsSorted] = useState(false);
  const newArray = () => {
    const array1 = [];
    const array2 = [];
    while (array1.length < len) {
      const NewBar = Math.floor(Math.random() * 400) + 20;
      //   console.log(array)
      if (array1.indexOf(NewBar) === -1) {
        array1.push(NewBar);
        array2.push(createBars(NewBar));
      }
    }
    setBars(array1);
    setBarsComp(array2);
  };
  useEffect(() => {
    newArray();
  }, [len]);

  //ResetArray
  function resetArray() {
    if (notrespond === true) {
      newArray();
      setIsSorted(false);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 1000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
    console.log("newbars");
  }
  function createBars(height) {
    return {
      HEIGHT: height,
      COMPARE: false,
      SWAP: false,
    };
  }
  function toasthere() {
    Toast.show({
      type: "success",
      text1: "Sorting in progress... ",
      text2: "Great",
      visibilityTime: 1000,
      autoHide: true,
      position: "top",
      // bottomOffset:50,
      topOffset: 50,
    });
  }
  // Other Usestates
  const [notrespond, setnotrespond] = useState(true);
  const [tutorial, setTutorial] = useState(`I'm Captions`);
  const [isVisible, setisVisible] = useState("none");
  const [togglenow, settogglenow] = useState(false);
  const [iswidth, setIsWidth] = useState(3);
  const [prevlen, setPrevlen] = useState();
  const [disableslider, setdisableslider] = useState(false);

  function toggleTutorial() {
    setPrevlen(len);
    if (notrespond === true) {
      if (isVisible == "none") {
        setlen(10);
        setisVisible("flex");
        settogglenow(true);
        setIsWidth(30);
        setdisableslider(true)
        console.log(animateSpeed);
      } else {
        setdisableslider(false)
        setisVisible("none");
        settogglenow(false);
        setIsWidth(3);
        setlen(prevlen);
      }
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Great",
        visibilityTime: 1000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
  }

  // Bubble Sort
  const BubbleSort = async () => {
    if (notrespond === true) {
      await Bubble.BubbleSort(
        barsComp,
        (array) => {
          setBarsComp(array);
        },
        setnotrespond,
        animateSpeed,
        setTutorial,
        togglenow
      );
      setnotrespond(true);
      setTutorial("Bars are now sorted !!!");
    } else {
      toasthere();
    }
    setIsSorted(true);
  };
  //Insertion Sort
  const InsertionSort = async () => {
    if (notrespond === true) {
      await Insert.InsertSort(
        barsComp,
        (array) => {
          setBarsComp(array);
        },
        setnotrespond,
        animateSpeed,
        setTutorial,
        togglenow
      );
      setnotrespond(true);
      setTutorial("Bars are now sorted !!!");
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
    setIsSorted(true);
    // setTutorial("Bars are now sorted !!!");
  };

  // Quick Sort Algorithm
  const QuickSort = async () => {
    if (notrespond === true) {
      await Quick.QuickSort(
        barsComp,
        (array) => {
          setBarsComp(array);
        },
        setnotrespond,
        animateSpeed,
        setTutorial,
        togglenow
      );
      setnotrespond(true);
      setTutorial("Bars are now sorted !!!");
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
    // console.log(bars);
    setIsSorted(true);
  };

  // Heap Sort Algorithm
  const HeapSort = async () => {
    if (notrespond === true) {
      await Heap.HeapSort(
        barsComp,
        (array) => {
          setBarsComp(array);
        },
        setnotrespond,
        animateSpeed,
        setTutorial,
        togglenow
      );
      setnotrespond(true);
      setTutorial("Bars are now sorted !!!");
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
    setIsSorted(true);
    console.log("heap here");
  };

  /// MergeSort
  const MergeSort = async () => {
    if (notrespond === true) {
      await Merge.MergeSort(
        bars,
        (array) => {
          setBarsComp(array);
        },
        barsComp,
        setnotrespond,
        animateSpeed,
        setTutorial,
        togglenow
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
    setIsSorted(true);
    console.log(notrespond);
  };
  function changeArraySize(value) {
    // this.setState({len: value})
    if (notrespond == true) {
      setlen(value);
      newArray();
      setIsSorted(false);
    } else {
      Toast.show({
        type: "info",
        text1: "Sorting in progress...",
        text2: "Please wait",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
    // console.log(value);
  }
  function changeContent(algo) {
    setAlgorithm(algo);
  }
  // Speed Start
  function onhandleSpeedChange(slider) {
    if (notrespond == true) {
      setanimateSpeed(slider);
    } else {
      Toast.show({
        type: "success",
        text1: "Sorting in progress... ",
        text2: "Please Wait",
        visibilityTime: 2000,
        autoHide: true,
        position: "top",
        // bottomOffset:50,
        topOffset: 50,
      });
    }
    console.log(animateSpeed);
  }
  // Speed End

  return (
    <View style={styles.barCon}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <SideMenu
        handleMenu={(algo) => changeContent(algo)}
        navigation={navigation}
        tutorial={tutorial}
        isVisible={isVisible}
      />
      <Toast style={{ backgroundColor: "white", zIndex: 1 }} />
      <View style={styles.allBars}>
        {barsComp.map(({ HEIGHT, COMPARE, SWAP }) => (
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
      <View style={styles.container}>
        <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
          <View style={styles.dragHandle} />
          <View style={styles.draggableArea} {...panResponder.panHandlers}>
            <View
              style={{
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "rgba(147, 65, 107, 1)",
                alignSelf: "center",
                // zIndex: 1,s
                backgroundColor: "rgb(48,53,64)",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Size: {len}
              </Text>
              <Slider
                style={{
                  width: 250,
                  height: 30,
                  alignSelf: "center",
                  borderRadius: 10,
                }}
                minimumValue={10}
                maximumValue={48}
                minimumTrackTintColor="rgba(147, 65, 107, 1)"
                maximumTrackTintColor="white"
                step={5}
                onValueChange={changeArraySize}
                maximumTrackTintWidth="20%"
                upperLimit={48}
                thumbTintColor="white"
                
                disabled={disableslider}
              />
              <Slider
                style={{
                  width: 250,
                  height: 30,
                  alignSelf: "center",
                }}
                minimumValue={0}
                maximumValue={2}
                minimumTrackTintColor="rgba(147, 65, 107, 1)"
                maximumTrackTintColor="white"
                step={1}
                onValueChange={onhandleSpeedChange}
                maximumTrackTintWidth="20%"
                upperLimit={48}
                thumbTintColor="white"
                disabled={disableslider}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingBottom: 10,
                }}
              >
                <Text style={{ color: "white", right: 15 }}>Slow</Text>
                <Text style={{ color: "white" }}>Medium</Text>
                <Text style={{ color: "white", left: 15 }}>Fast</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                // marginLeft: 10,
                marginTop: 20,
              }}
            >
              {/* <Text style={{ color: "grey" }}>Size</Text> */}
              <Text style={{ color: "white", fontSize: 15 }}>RESET</Text>
              <Text style={{ color: "white", fontSize: 15 }}>START</Text>
              <Text style={{ color: "white", fontSize: 15 }}>Tutorial</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                height: "7%",
                top: 15,
                marginLeft: 10,
                // marginTop: 10,
              }}
            >
              <View
                style={{
                  width: 45,
                  backgroundColor: "grey",
                  borderRadius: 30,
                  height: 45,
                }}
              >
                <Ionicons
                  name="reload"
                  size={28}
                  color="rgba(147, 65, 107, 1)"
                  onPress={resetArray}
                  style={{ alignSelf: "center", paddingTop: 7 }}
                  // disabled={true}
                />
              </View>
              <View
                style={{
                  width: 45,
                  backgroundColor: "grey",
                  borderRadius: 30,
                  height: 45,
                }}
              >
                <FontAwesome
                  name="play-circle"
                  size={30}
                  color="rgba(147, 65, 107, 1)"
                  style={{ alignSelf: "center", paddingTop: 6 }}
                  onPress={
                    Algorithm === "Bubble Sort" ? (
                      BubbleSort
                    ) : Algorithm === "Merge Sort" ? (
                      MergeSort
                    ) : Algorithm === "Insert Sort" ? (
                      InsertionSort
                    ) : Algorithm === "Heap Sort" ? (
                      HeapSort
                    ) : Algorithm === "Quick Sort" ? (
                      QuickSort
                    ) : (
                      <View></View>
                    )
                  }
                  disabled={isSorted}
                />
              </View>
              <View
                style={{
                  width: 55,
                  backgroundColor: "grey",
                  borderRadius: 30,
                  height: 40,
                }}
              >
                <ToggleSwitch
                  isOn={togglenow}
                  onColor="rgba(147, 65, 107, 1)"
                  offColor="rgb(43,52,73)"
                  onToggle={(isOn) => toggleTutorial(isOn)}
                  style={{ alignSelf: "center", paddingTop: 8 }}
                />
              </View>
            </View>
            {Algorithm === "Bubble Sort" ? (
              <BubbleSlide />
            ) : Algorithm === "Merge Sort" ? (
              <MergeSlide />
            ) : Algorithm === "Insert Sort" ? (
              <InsertSlide />
            ) : Algorithm === "Heap Sort" ? (
              <HeapSlide />
            ) : Algorithm === "Quick Sort" ? (
              <QuickSlide />
            ) : (
              <View></View>
            )}
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allBars: {
    height: 500,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 65,
    // bottom: 153,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
  },
  barCon: {
    flex: 1,
    backgroundColor: "rgb(12,18,31)",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    // top:15
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 10 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "rgb(12,18,31)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: "rgba(147, 65, 107, 1)",
    borderWidth: 1,
  },
  draggableArea: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  dragHandle: {
    width: 50,
    height: 3,
    backgroundColor: "grey",
    borderRadius: 10,
    top: 5,
    alignSelf: "center",
  },
  menu: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
  },
});
