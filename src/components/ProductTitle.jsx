import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const ProductTitle = ({ title = "" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 700 }}>{title}</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 12, color: color.primary, fontWeight: 600 }}>
          ShowAll
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductTitle;
