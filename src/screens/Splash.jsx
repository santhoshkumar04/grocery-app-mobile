import React, { useCallback, useEffect, useState } from "react";
import { Animated, Image, Text, View } from "react-native";
import { color } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from ".";
// import * as SplashScreen from "expo-splash-screen";

export default function Splash() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace(SCREENS.HOME);
    }, 2000);
  });

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       // await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await SplashScreen.preventAutoHideAsync(); // *** The problem.
  //       // await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       console.log("Font loaded successfully");
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //     nav.replace(SCREENS.HOME);
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <View
      // onLayout={onLayoutRootView}
      style={{
        backgroundColor: color.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" />
      <Animated.View
        animation="fade"
        duration={5000}
        style={{ height: 100, display: "flex", alignItems: "center" }}
      >
        <Image
          style={{ height: 100, width: 100, marginBottom: 20 }}
          source={require("../../assets/logo-app.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          Splash
        </Text>
      </Animated.View>
    </View>
  );
}
