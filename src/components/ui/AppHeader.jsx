import { View, Text } from "react-native";
import React from "react";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../../constants/Color";

const AppHeader = ({ title, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: 14,
        // paddingTop: 50,
        paddingHorizontal: 14,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
        backgroundColor: color.secondary,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        // elevation: 4,
      }}
    >
      <IonicIcon
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={24}
        color={color.textBase}
      />
      <Text style={{ fontSize: 18, fontWeight: 500, color: color.textBase }}>
        {title}
      </Text>
    </View>
  );
};

export default AppHeader;
