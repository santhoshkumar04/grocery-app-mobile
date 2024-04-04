import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../constants/Color";
import { profile } from "../constants/profileData";
import { StatusBar } from "expo-status-bar";
import { shareAction } from "../utils/utils";
import AppHeader from "../components/ui/AppHeader";
import { SCREENS } from ".";

const Profile = ({ navigation }) => {
  const handleOnPress = (type, view) => {
    if ("function" === type) {
      if (view === "share") {
        return shareAction(
          "React Native | A framework for building native apps using React",
          "Download the app at https://github.com",
          "https://github.com"
        );
      } else {
        return console.log("logout");
      }
    }
    return navigation.navigate(view, { path: "profile" });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, gap: 20, backgroundColor: color.secondary }}
    >
      <StatusBar />
      <AppHeader navigation={navigation} title="Profile" />
      <View style={{ flex: 1, gap: 20 }}>
        <View style={{ paddingVertical: 10, paddingHorizontal: 14, gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>My Account</Text>
          <Text style={{ fontSize: 18, fontWeight: 400 }}>9790788808</Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 14 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: color.primaryLight,
              borderRadius: 12,
              borderColor: color.primary_100,
              borderWidth: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.WALLET)}
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                borderBottomColor: color.primary_100,
                borderBottomWidth: 1,
                paddingVertical: 14,
                paddingHorizontal: 14,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <IonicIcon name="wallet-outline" size={24} />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Morn Cash</Text>
              </View>
              <IonicIcon name="chevron-forward-outline" size={18} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                paddingVertical: 14,
                paddingHorizontal: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: color.textBase,
                }}
              >
                Balance: ₹30
              </Text>
              <TouchableOpacity
                onPress={() => console.log(item.name)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderColor: color.textBase,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: color.textBase,
                  }}
                >
                  Add cash
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {profile.map((l, i) => (
            <View key={i}>
              <Text
                style={{
                  color: color.textMuted,
                  marginBottom: 6,
                  marginTop: 30,
                }}
              >
                {l.header}
              </Text>
              {l.items.map((p, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleOnPress(p.type, p.view)}
                  style={{
                    paddingVertical: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // backgroundColor: "red",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 15,
                      alignItems: "center",
                    }}
                  >
                    <IonicIcon name={p.icon} size={20} />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        paddingVertical: 10,
                        color: color.textTitle,
                      }}
                    >
                      {p.title}
                    </Text>
                  </View>
                  <IonicIcon name="chevron-forward-outline" size={16} />
                </TouchableOpacity>
              ))}
            </View>
          ))}

          <View
            style={{
              height: 80,
              marginVertical: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 100, height: 36 }}
              source={require("../../assets/freshmorn-logo.png")}
            />
            <Text style={{ fontSize: 16, color: color.textFaint }}>v1.0.0</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
