import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CatagoryCardItem = ({ item, onPress, selected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        padding: 6,
        marginHorizontal: 5,
        borderRadius: 12,
        marginBottom: 15,
        gap: 5,
        // opacity: 0.4,
        backgroundColor: item.id === selected ? "white" : "transparent",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 55,
          height: 55,
          backgroundColor: "white",
          borderRadius: 12,
        }}
      />
      <Text
        numberOfLines={2}
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: item.id === selected ? 600 : 400,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCardItem;
