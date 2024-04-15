import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import AppHeader from "../components/ui/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { SCREENS } from ".";

const Address = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <AppHeader navigation={navigation} title="Address" />
      <ScrollView style={{ padding: 14, gap: 10 }}>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontWeight: 500 }}>Your Saved Address</Text>
        </View>
        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 12,
              padding: 14,
              gap: 5,
              width: "100%",
            }}
          >
            <IonicIcon width="10%" name="home-outline" size={24} />
            <View style={{ width: "80%" }}>
              <Text style={{ fontWeight: 500, fontSize: 16 }}>Home</Text>
              <Text
                style={{ color: color.textMuted, fontSize: 12 }}
                numberOfLines={2}
              >
                4517 Washington Ave. Manchester, Kentucky 39495Room no-26 (3rd
                floor), Banani super market, Banani C/A, P.O. Box: 1213
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                width: "10%",
                justifyContent: "center",
              }}
            >
              <IonicIcon name="ellipsis-vertical-sharp" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          // backgroundColor: "red",
          padding: 14,
          borderTopWidth: 1,
          borderTopColor: color.border,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.ADDADDRESS)}
          style={{
            backgroundColor: color.primary,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
            // opacity: mobileNumber?.disabled ? 0.6 : 1,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            Add New Address
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Address;
