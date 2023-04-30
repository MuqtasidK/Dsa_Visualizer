import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  Image,
  View,
} from "react-native";
import uuid from "uuid/v4";
import SortingBar from "./Sorting/SortingBar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./HomePage/Home";
import PathFind from "./PathFinding/PathFind";
import Slider from "./Sorting/SideMenu";
import OnboardingScreen from "./OnBoarding/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Compare from "./CompareSortAlgo/Compare";
export default function App() {
  // const id = uuid();
  function SplashScreen({ navigation }) {
    if(isFirstLaunch==true)
    {

      setTimeout(() => {
        navigation.replace("Onboarding");
      }, 500);
    }
    else{
      setTimeout(() => {
        navigation.replace("Home");
      }, 500);

    }
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "rgb(12,18,31)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          height: "100%",
        }}
      >
        <Image
          source={require("./assets/splashlogo.jpg")}
          style={{ width: 70, height: 70, justifyContent: "center",right:10 }}
        />
        <Text style={{ color: "white",fontSize:25 }}>Visualizer</Text>
      </View>
      // </ImageBackground>
    );
  }
  const Stack = createNativeStackNavigator();
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2c4365" animated={true} />
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Path"
          component={PathFind}
          options={{ orientation: "landscape" }}
        />
        <Stack.Screen name="Sorting" component={SortingBar} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SideMenu" component={Slider} />
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen
          name="compare"
          component={Compare}
          options={{ orientation: "landscape" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  } else {
    return  <NavigationContainer>
    <StatusBar backgroundColor="#2c4365" animated={true} />
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Path"
        component={PathFind}
        options={{ orientation: "landscape" }}
      />
      <Stack.Screen name="Sorting" component={SortingBar} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SideMenu" component={Slider} />
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen
        name="compare"
        component={Compare}
        options={{ orientation: "landscape" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  }
}

const styles = StyleSheet.create({});
