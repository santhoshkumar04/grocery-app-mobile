import { View, Text, TextInput } from "react-native";
import React from "react";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../../constants/Color";

const Input = ({ leftIcon, labelName, rightIcon, ...rest }) => {
  return (
    <View style={{ gap: 5 }}>
      {labelName && <Text style={{ fontWeight: 500 }}>{labelName}</Text>}
      <View
        style={{
          backgroundColor: color.border,
          flexDirection: "row",
          alignItems: "center",
          borderColor: color.border,
          borderWidth: 1,
          gap: 10,
          paddingHorizontal: 10,
          borderRadius: 6,
          paddingVertical: 6,
          position: "stickty",
          top: 0,
        }}
      >
        {leftIcon && <IonicIcon name={leftIcon} size={24} />}

        <TextInput
          style={{
            width: "100%",
            paddingVertical: 3,
            paddingHorizontal: 5,
            fontSize: 16,
            lineHeight: 23,
          }}
          //   placeholder="Username"
          placeholderTextColor="#7f7f7f"
          {...rest}
        />
      </View>
    </View>
  );
};

export default Input;
