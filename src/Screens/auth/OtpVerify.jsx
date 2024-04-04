import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import OTPInput from "../../components/OTPInput";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../../constants/Color";
import { useNavigation } from "@react-navigation/native";
import OtpTimer from "../../components/OtpTimer";
import IonicIcon from "@expo/vector-icons/Ionicons";

const OtpVerify = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar />

      <View style={{ paddingHorizontal: 14, paddingVertical: 10, gap: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
          onPress={() => nav.replace("Auth")}
        >
          <IonicIcon name="arrow-back" size={20} color={color.primary} />
        </TouchableOpacity>
        <View>
          <Text style={{ paddingTop: 30, fontSize: 24, fontWeight: "600" }}>
            Verify phone number
          </Text>
          <Text style={{ fontSize: 16 }}>Verify phone number</Text>
        </View>
        <OTPInput
          autoFocus={true}
          inputCount={5}
          handleTextChange={(v) => console.log(v)}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <OtpTimer
            minutes={0}
            seconds={6}
            resendButtonTextStyle={{
              fontSize: 16,
              textAlign: "center",
              fontWeight: "600",
              marginRight: 6,
            }}
            resendButtonAction={() => console.log("sc")}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: color.primary,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
          }}
          onPress={() => nav.replace("Home")}
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
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerify;
