import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../Screens";
import { color } from "../constants/Color";

const Header = () => {
  const nav = useNavigation();
  return (
    <View style={styles.header}>
      <View style={{ paddingRight: 0 }}>
        <Text style={styles.headerTitle}>Delivery in 20 mins</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IonicIcon
            style={{ marginBottom: 3 }}
            name="location"
            color={color.textMuted}
            size={13}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.headerBadge}
          >
            No: 12/45 t.v.k street arumbakkam
          </Text>
          <IonicIcon name="caret-down" color={color.textMuted} size={13} />
        </View>
      </View>
      <TouchableOpacity onPress={() => nav.navigate(SCREENS.PROFILE)}>
        <View style={styles.avatar}>
          <IonicIcon
            style={styles.avatarImg}
            name="person"
            color={color.third}
            size={28}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: color.textTitle,
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: "400",
    color: color.textMuted,
    marginBottom: 4,
    marginHorizontal: 6,
  },
  avatar: {
    position: "relative",
    backgroundColor: "blue",
    height: 40,
    width: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.border,
  },
  avatarImg: {
    borderRadius: 9999,
    opacity: 0.6,
  },
});
