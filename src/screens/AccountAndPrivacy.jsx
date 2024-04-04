import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/ui/AppHeader";
import Input from "../components/ui/Input";
import { color } from "../constants/Color";
import { StatusBar } from "expo-status-bar";

const AccountAndPrivacy = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <AppHeader title={"Account and Privacy"} navigation={navigation} />
      <KeyboardAvoidingView style={{ flex: 1, padding: 14, gap: 20 }}>
        <Input labelName="UserName *" placeholder="Username" />
        <Input
          labelName="Mobile Number *"
          placeholder="Mobile number"
          editable={false}
          selectTextOnFocus={false}
        />
        <Input labelName="Email *" placeholder="Enter email adress" />
        <TouchableOpacity
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
          onPress={() => alert("Show privacy policy")}
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
            Update
          </Text>
        </TouchableOpacity>
        <View>
          <Text>Header</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountAndPrivacy;
