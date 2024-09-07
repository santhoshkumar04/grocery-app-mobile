import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const data = [
  require("../../../assets/slider-0.png"),
  require("../../../assets/slider-1.png"),
  require("../../../assets/slider-2.png"),
];

const CarouselCardItem = ({ source }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Image
        style={{ width: "auto", height: 190, resizeMode: "cover" }}
        source={source}
      />
    </View>
  );
};

const CarouselCards = ({ autoPlay = true, loop = true }) => {
  const width = Dimensions.get("window").width - 26;

  return (
    <View style={{ borderRadius: 12, overflow: "hidden" }}>
      <Carousel
        loop={loop}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 44,
        }}
        width={width}
        height={width / 2}
        autoPlay={autoPlay}
        data={data}
        scrollAnimationDuration={4000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index, item }) => {
          return <CarouselCardItem source={item} key={index} />;
        }}
      />
    </View>
  );
};

export default CarouselCards;
