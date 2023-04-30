import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Home({ navigation, item }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#2c4365"
      />
      <View style={{flexDirection:'column',height:'100%',width:'100%'}}>
        <View style={{}}>
          <View
            style={{
              width: 200,
              height: 220,
              position: "absolute",
              left: 25,
              top: 50,
              zIndex: 1,
            }}
          >
            <View style={{flexDirection:'row'}}>

            <Text style={{ color: "rgba(190, 190, 190, 1)", fontSize: 25 }}>
              Data Structures
              Visualizer
            </Text>
            <Image
              style={{ width: 80, height: 80,right:20,top:25 }}
              source={require("../assets/loading3.gif")}
              />
              </View>
            <Text
              style={{
                color: "grey",
                paddingTop: 5,
                fontSize: 15,
                lineHeight: 22,
              }}
            >
              This app is comprised of visualization of Sorting and Path Finding
              algorithms. It will help in learning algorithms in much more
              efficient way.
            </Text>
          </View>
          <View>
            <Image
              style={{ width: 400, height: 400 }}
              source={require("../assets/homeback.png")}
            />
          </View>
        </View>
        
        <View style={styles.algoContent}>
          <TouchableHighlight
          style={styles.algoSort}
          underlayColor="rgb(11,55,99)"
          onPress={() => navigation.navigate("Sorting")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 15,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 25, color: "rgba(190, 190, 190, 1)" }}>Sorting </Text>
              
            </View>
            <AntDesign
              name="doubleright"
              size={24}
              color="rgb(33,150,243)"
              style={{
                position: "absolute",
                right: 20,
                alignSelf: "center",
                // top: 60,
              }}
            />
          </View>
        </TouchableHighlight>

          <TouchableHighlight
          style={styles.algoSort}
          underlayColor="rgb(11,55,99)"
          onPress={() => navigation.navigate("compare")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 15,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 25, color: "rgba(190, 190, 190, 1)" }}>Compare </Text>
            </View>
            <AntDesign
              name="doubleright"
              size={24}
              color="rgb(33,150,243)"
              style={{
                position: "absolute",
                right: 20,
                alignSelf: "center",
              }}
            />
          </View>
        </TouchableHighlight>
          <TouchableHighlight
          style={styles.algoPath}
          underlayColor="rgb(11,55,99)"
          onPress={() => navigation.navigate("Path")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 10,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 25, color: "rgba(190, 190, 190, 1)" }}>PathFinding </Text>
            </View>
            <AntDesign
              name="doubleright"
              size={24}
              color="rgb(33,150,243)"
              style={{
                position: "absolute",
                right: 20,
                alignSelf: "center",
              }}
            />
          </View>
        </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "rgb(12,18,31)",
    height: "100%",
    width: "100%",
  },
  algoContent: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },
  algoSort: {
    width: "60%",
    height: "20%",
    borderColor: "rgb(33,150,243)",
    backgroundColor: "rgba(11,55,99,0.6)",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf:'center'
  },
  algoPath: {
    borderRadius: 10,
    width: "60%",
    height: "20%",
    borderColor: "rgb(33,150,243)",
    backgroundColor: "rgba(11,55,99,0.6)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf:'center'
  },
  algoCom1: {
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 8,
    fontSize: 20,
    color: "rgba(187, 178, 178, 1)",
  },
  algoCom2: {
    textAlign: "center",
    lineHeight: 25,
    fontSize: 15,
    padding: 20,
    color: "rgba(187, 178, 178, 1)",
  },
  sortingtxt: {
    fontSize: 30,
    color: "white",
    textShadowColor: "rgb(33,150,243)",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    left:50
  },

  pathtxt: {
    fontSize: 30,
    color: "white",
    textShadowColor: "rgb(145,135,191)",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    left:50
  },
});
