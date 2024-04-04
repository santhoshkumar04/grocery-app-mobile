import { View, Text, TextInput } from "react-native";
import React from "react";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../constants/Color";

const SearchInput = () => {
  return (
    <View
      style={{
        backgroundColor: color.border,
        flexDirection: "row",
        alignItems: "center",
        borderColor: color.border,
        borderWidth: 1,
        gap: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        paddingVertical: 6,
        position: "stickty",
        top: 0,
      }}
    >
      <IonicIcon name="search" size={24} color={color.textMuted} />
      <TextInput
        style={{ flex: 1, fontSize: 16, height: 30 }}
        placeholder="SearchInput"
      />
    </View>
  );
};

export default SearchInput;
