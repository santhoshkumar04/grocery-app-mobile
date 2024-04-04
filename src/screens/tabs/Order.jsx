import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/ui/AppHeader";
import { color } from "../../constants/Color";
import { vegetables } from "../../constants/vegetables";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { SCREENS } from "../index";
import { StatusBar } from "expo-status-bar";

const Order = ({ route, navigation }) => {
  // const { params } = route;
  return (
    <SafeAreaView>
      {/* <StatusBar backgroundColor="white" /> */}
      <AppHeader title="Orders" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 14 }}>
        <View
          style={{
            backgroundColor: color.secondary,
            borderRadius: 12,
            gap: 10,
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.ORDERSSUMMARY)}
            style={{
              flexDirection: "row",
              paddingHorizontal: 14,
              paddingTop: 14,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <IonicIcon
                name="checkmark-done-outline"
                color={color.primary}
                size={30}
              />
              <View>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>
                  Deliverd in 10 mins
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 400 }}>
                  <Text style={{ fontWeight: 500 }}>₹500</Text> 03-Apr-2024 at
                  10:30 AM
                </Text>
              </View>
            </View>
            <IonicIcon name="chevron-forward-outline" size={20} />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 14,
              paddingBottom: 14,
            }}
          >
            <Text numberOfLines={2}>
              {vegetables.map((i) => i.name).join(", ")}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              borderTopColor: color.border,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Text>Reorder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
