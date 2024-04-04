import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../../constants/Color";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Auth() {
  const [isContinue, setIsContinue] = useState(true);
  const [mobileNumber, setMobileNumber] = useState({
    mobilevalidate: false,
    telephone: "",
    disabled: true,
  });
  const nav = useNavigation();

  const handlePhoneNumber = (text) => {
    console.log(text);
    // let num = text.replace(".", "");
    // console.log(num);
    // if (isNaN(num)) {
    //   // Its not a number
    //   console.log("Invalid");
    // } else {
    //   // this.handleChange("mobileNo", num);
    //   console.log("ok");
    // }

    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      setMobileNumber({
        mobilevalidate: false,
        telephone: text,
        disabled: true,
      });
      return false;
    } else {
      setMobileNumber({
        mobilevalidate: true,
        telephone: text,
        message: "",
        disabled: false,
      });
      return true;
    }
  };

  console.log(mobileNumber);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.secondary }}>
      <StatusBar />
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          paddingHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              marginVertical: 30,
              paddingVertical: 30,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              Welcome to fresh Morn
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 50 }}>
              Enter your mobile number
            </Text>

            <View
              style={{
                flexDirection: "row",
                borderColor: color.primary,
                borderWidth: 1,
                alignItems: "center",
                paddingVertical: 6,
                marginBottom: 20,
                height: 50,
                backgroundColor: color.secondary,
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
                color: "#222",
                borderStyle: "solid",
              }}
            >
              <Text style={{ marginRight: 10 }}>+91 </Text>
              <TextInput
                autoFocus={true}
                keyboardType="decimal-pad"
                style={{ flex: 1 }}
                onChangeText={(text) => handlePhoneNumber(text)}
              />
            </View>
            <TouchableOpacity
              disabled={mobileNumber?.disabled}
              style={{
                backgroundColor: color.primary,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 10,
                elevation: 3,
                opacity: mobileNumber?.disabled ? 0.6 : 1,
              }}
              onPress={() => nav.replace("OtpVerify")}
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
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={{ textAlign: "center", marginBottom: 40, fontSize: 14 }}
        >
          <Text numberOfLines={2} style={{ textAlign: "center" }}>
            By continuing you agree to our Terms of Service and Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
