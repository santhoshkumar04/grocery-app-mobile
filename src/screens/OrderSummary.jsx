import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/ui/AppHeader";
import { color } from "../constants/Color";
import OrderDetails from "../components/OrderDetails";
import BillDetails from "../components/BillDetails";
import OrderedItems from "../components/OrderedItems";
import SingleProductAddCart from "../components/SingleProductAddCart";
import ReorderButtom from "../components/ReorderButtom";
import { StatusBar } from "expo-status-bar";

const OrderSummary = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={color.secondary} />
      <AppHeader title={"Order Summary"} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ padding: 14, marginBottom: 70 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            Arrived at 9.29 am
          </Text>
          <Text style={{ color: color.primary }}>Download Invoice</Text>
        </View>
        <OrderedItems />
        <BillDetails />
        <OrderDetails />
      </ScrollView>
      <ReorderButtom />
    </SafeAreaView>
  );
};

export default OrderSummary;
