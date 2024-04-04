import { View, Text, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
        height: 150,
        width: "auto",
        borderRadius: 12,
      }}
    >
      <Image
        style={{ width: "auto", height: 150, resizeMode: "cover" }}
        height={150}
        // resizeMode="contain"
        source={require("../../assets/slider-2.png")}
      />
    </View>
  );
};

export default Banner;
