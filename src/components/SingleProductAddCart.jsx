import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const SingleProductAddCart = ({ price, productId, quantity }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginHorizontal: "auto",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: color.secondary,
        borderTopColor: color.border,
        borderStyle: "solid",
        borderTopWidth: 1,
      }}
    >
      <View>
        <Text>{quantity}</Text>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>₹{price}</Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: color.primary,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: color.secondary,
          }}
        >
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleProductAddCart;
