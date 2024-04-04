import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Banner from "../../components/Banner";
import ProductTitle from "../../components/ProductTitle";
import ProductCarousel from "../../components/ProductCarousel";
import { vegetables } from "../../constants/vegetables";
import { color } from "../../constants/Color";
import StickyHeader from "../../components/StickyHeader";

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
