import { View, Text, Image } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const OrderedItems = () => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 10,
          borderBottomColor: color.border,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 700 }}>
          6 Items in this order
        </Text>
      </View>
      <View style={{ gap: 10, paddingVertical: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 10 }}>
          <Image
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              backgroundColor: "red",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 12,
            }}
            source={require("../../assets/icon.png")}
          />
          <View
            style={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 500 }}>Milk</Text>
            <Text style={{ flexGrow: 1, fontSize: 12 }}>100g x 2</Text>
          </View>
          <Text style={{ fontWeight: 500 }}>₹122</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 10 }}>
          <Image
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              backgroundColor: "red",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 12,
            }}
            source={require("../../assets/icon.png")}
          />
          <View
            style={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 500 }}>Milk</Text>
            <Text style={{ flexGrow: 1, fontSize: 12 }}>100g x 2</Text>
          </View>
          <Text style={{ fontWeight: 500 }}>₹122</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderedItems;
