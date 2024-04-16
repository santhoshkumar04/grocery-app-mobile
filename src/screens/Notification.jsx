import { View, Text, Switch } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IonicIcon from "@expo/vector-icons/Ionicons";
import AppHeader from "../components/ui/AppHeader";
import { color } from "../constants/Color";
import { StatusBar } from "expo-status-bar";

const Notification = ({ navication }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      <AppHeader navigation={navication} title="Notifications" />
      <View style={{ padding: 14 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: color.secondary,
            borderRadius: 8,
            padding: 10,
            gap: 10,
          }}
        >
          <IonicIcon
            style={{ width: "11%" }}
            color={color.primary_300}
            name="logo-whatsapp"
            size={40}
          />
          <View style={{ gap: 1, marginLeft: 10, width: "68%" }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              WhatsApp Message
            </Text>
            <Text
              style={{ fontSize: 12, color: color.textMuted }}
              numberOfLines={2}
            >
              Get update from us about coupons, promotions and offers
            </Text>
          </View>
          <Switch style={{ width: "15%" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
