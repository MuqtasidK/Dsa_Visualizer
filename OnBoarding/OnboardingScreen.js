import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
export default function OnboardingScreen({ navigation }) {

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Onboarding
        onSkip={() => navigation.navigate("Home")}
        onDone={() => navigation.navigate("Home")}
        pages={[
          {
            titleStyles: {
              fontSize: 23,
              paddingBottom: 0,
              bottom: 10,
            },
            
            backgroundColor: "rgb(12,18,31)",
            image: (
              <View style={styles.sortborder}>
                <Image
                  source={require("../assets/onboard_visualize.png")}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ),
            title: "Visualize Sort Algorithms",
            subtitle:
              "Easily visualize and compare different sorting algorithms",
          },
          {
            titleStyles: {
              fontSize: 22,
              paddingBottom: 0,
              bottom: 10,
            },
            backgroundColor: "rgb(12,18,31)",
            image: (
              <View style={styles.sortborder}>
                <Image
                  source={require("../assets/pathfind.png")}
                  style={{ width: 260, height: 180 }}
                />
              </View>
            ),
            title: "Visualize PathFinding Algorithms",
            subtitle: "Easily visualize & understand pathfinding algorithms",
          },

          {
            titleStyles: {
              fontSize: 25,
              paddingBottom: 0,
              bottom: 10,
            },
            backgroundColor: "rgb(12,18,31)",
            image: (
              <View style={styles.sortborder}>
                <Image
                  source={require("../assets/onboard_code.png")}
                  style={{ width: 250, height: 250, top: 10 }}
                />
              </View>
            ),
            title: "Code",
            subtitle:
              "Know more about the algorithm, its complexities, & code to understand its functionality & working",
          },
          {
            titleStyles: {
              fontSize: 23,
            },
            backgroundColor: "rgb(12,18,31)",
            image: (
              <View style={styles.sortborder}>
                <Image
                  source={require("../assets/speedicon.png")}
                  style={{ width: 280, height: 150, top: 50 }}
                />
              </View>
            ),
            title: "Speed",
            subtitle: "Play with algorithms by increasing & decreasing speed ",
          },
          {
            titleStyles: {
              fontSize: 25,
              paddingBottom: 0,
              bottom: 10,
            },
            backgroundColor: "rgb(12,18,31)",
            image: (
              <View style={styles.sortborder}>
                <Image
                  source={require("../assets/tutorial.jpg")}
                  style={{ width: 230, height: 300 }}
                />
              </View>
            ),
            title: "Captions",
            subtitle:
              "Understanding algorithms more easily with captions feature",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sortimg: {
    width: 200,
    height: 180,
  },
  pathimg: {
    width: 260,
    height: 180,
  },
  sortborder: {
    padding: 13,
  },
});
