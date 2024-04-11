import { Text, View } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Banner from "../../components/Banner";
import ProductTitle from "../../components/ProductTitle";
import ProductCarousel from "../../components/ProductCarousel";
import { vegetables } from "../../constants/vegetables";
import { color } from "../../constants/Color";
import StickyHeader from "../../components/StickyHeader";
import BottomSheet from "@gorhom/bottom-sheet";

const Home = () => {
  return (
    <View style={{ backgroundColor: color.secondary, flex: 1 }}>
      <StickyHeader>
        <Banner />
        <ProductTitle title="Exclusive Offer" />
        <ProductCarousel data={vegetables} />
        <ProductTitle title="Best Selling" />
        <ProductCarousel data={vegetables} />
        <ProductTitle title="Best Selling" />
        <ProductCarousel data={vegetables} />
      </StickyHeader>
      <StatusBar />
    </View>
  );
};

export default Home;
