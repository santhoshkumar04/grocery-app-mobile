import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { color } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from ".";

export default function Splash() {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace(SCREENS.AUTH);
    }, 2000);
  });

  return (
    <View
      style={{
        backgroundColor: color.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" />
      <View style={{ height: 100, display: "flex", alignItems: "center" }}>
        <Image
          style={{ height: 100, width: 100, marginBottom: 20 }}
          source={require("../../assets/logo-app.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          Splash
        </Text>
      </View>
    </View>
  );
}
