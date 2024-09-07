import { View, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
        height: 180,
        width: "auto",
        borderRadius: 12,
      }}
    >
      <Image
        style={{ width: "auto", height: 180, resizeMode: "cover" }}
        source={require("../../assets/slider-2.png")}
      />
    </View>
  );
};

export default Banner;
