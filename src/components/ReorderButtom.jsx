import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const ReorderButtom = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 14,
        paddingVertical: 10,
        width: "100%",
        backgroundColor: color.secondary,
        borderTopColor: color.border,
        borderStyle: "solid",
        borderTopWidth: 1,
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
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
          Order again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReorderButtom;
