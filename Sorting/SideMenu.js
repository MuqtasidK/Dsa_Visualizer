import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
  TouchableHighlight,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
export default function SideMenu({ handleMenu, navigation,tutorial,isVisible }) {
  const [isOpen, setisOpen] = useState("none");
  const [newAlgo, setNewAlgo] = useState("Bubble Sort");
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function changeAlgo(algo) {
    handleMenu(algo);
    setNewAlgo(algo);
    setModalVisible(!isModalVisible);
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="grey"
        barStyle="black"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          height: 50,
          alignItems: "center",
          width: "100%",
          borderBottomColor: "rgba(147, 65, 107, 1)",
          borderBottomWidth: 1,
          // height:'100%'
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "grey",
            left: 15,
            borderRadius: 20,
            // borderColor:'white',
            // borderWidth:1
          }}
        >
          <AntDesign
            name="arrowleft"
            size={25}
            color="rgba(147, 65, 107, 1)"
            onPress={() => navigation.navigate("Home")}
            style={{ alignSelf: "center", paddingTop: 5 }}
          />
        </View>
        <Text
          style={{
            width: 150,
            textAlign: "center",
            color: "white",
            fontSize: 18,
          }}
        >
          {newAlgo}
        </Text>
        <View
          style={{
            width: 35,
            height: 35,
            // backgroundColor: "grey",
            right: 15,
            borderRadius: 20,
          }}
        >
          <EvilIcons
            name="navicon"
            size={28}
            onPress={toggleModal}
            color="rgba(147, 65, 107, 1)"
            style={{ alignSelf: "center", paddingTop: 6 }}
          />
        </View>
      </View>
      <GestureRecognizer
        style={{ flex: 1, height: "100%" }}
        onSwipeUp={() => setModalVisible(true)}
        onSwipeDown={() => setModalVisible(false)}
      >
        <Modal
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="right"
          onSwipeComplete={toggleModal}
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          animationInTiming={800}
          animationOutTiming={500}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={500}
          style={styles.modal}
        >
          <TouchableHighlight
            onPress={() => changeAlgo("Bubble Sort")}
            underlayColor="rgba(147, 65, 107, 1)"
            style={[styles.algorithms, {}]}
          >
            <Text style={{ color: "white" }}>Bubble Sort</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(147, 65, 107, 1)"
            onPress={() => changeAlgo("Quick Sort")}
            style={styles.algorithms}
          >
            <Text style={{ color: "white" }}>Quick Sort</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(147, 65, 107, 1)"
            onPress={() => changeAlgo("Merge Sort")}
            style={styles.algorithms}
          >
            <Text style={{ color: "white" }}>Merge Sort</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(147, 65, 107, 1)"
            onPress={() => changeAlgo("Insert Sort")}
            style={[styles.algorithms, {}]}
          >
            <Text style={{ color: "white" }}>Insert Sort</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(147, 65, 107, 1)"
            onPress={() => changeAlgo("Heap Sort")}
            style={styles.algorithms}
          >
            <Text style={{ color: "white" }}>Heap Sort</Text>
          </TouchableHighlight>
        </Modal>
        <View
          style={{
            height: 45,
            backgroundColor: "rgb(43,52,73)",
            borderColor: "rgb(94,101,114)",
            borderWidth: 1,
            width: "100%",
            display:isVisible
          }}
        >
          <Text style={{ color: "white",alignSelf:'center',position:'absolute',top:9 }}>
            {tutorial}
          </Text>
        </View>
      </GestureRecognizer>
      {/* </View> */}
      {/* </SafeAreaView> */}
    </>
  );
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "92%",
    width: "70%",
    backgroundColor: "rgba(49, 49, 49, 0.88)", //rgba(73, 72, 72, 0.88)
    position: "absolute",
    right: 0,
    zIndex: 1,
    marginTop: 70,
  },
  algorithms: {
    height: 50,
    // backgroundColor: "rgba(169, 68, 120, 0.85)",
    // alignItems:'center'
    justifyContent: "center",
    paddingLeft: 10,
    borderTopColor: "white",
    borderBottomColor: "white",
    borderWidth: 1,
  },
  modal: {
    margin: 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    width: "70%",
    backgroundColor: "rgb(12,18,31)", //rgba(73, 72, 72, 0.88)
    position: "absolute",
    left: "30%",
    bottom: 0,
  },
});
