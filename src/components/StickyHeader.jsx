import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../constants/Color";
import SearchInput from "../components/SearchInput";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../screens/index";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

const StickyHeader = ({ children }) => {
  const nav = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const bottomSheetRef = useRef(null);

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -56],
    extrapolate: "clamp",
  });
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 40],
    extrapolate: "clamp",
  });

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        style={{ zIndex: 1 }}
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <View style={{}}>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <Animated.View
          style={[
            styles.headerWrap,
            { opacity: opacityTitle },
            ,
            { transform: [{ translateY: translateTitle }] },
          ]}
        >
          <TouchableOpacity onPress={handleOpenPress}>
            <Text style={styles.headerTitle}>Delivery in 20 min</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <IonicIcon name="location" color={color.textMuted} size={13} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.headerBadge}
              >
                No: 12/45 t.v.k street arumbakkam
              </Text>
              <IonicIcon name="caret-down" color={color.textMuted} size={13} />
            </View>
          </TouchableOpacity>
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
        </Animated.View>

        {/* <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Where are you going?"
            placeholderTextColor="#05141c"
            style={styles.input}
          />

          <View style={styles.inputIcon}>
            <FeatherIcon color="#05141c" name="search" size={16} />
          </View>
        </View> */}
        <SearchInput />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={1}
      >
        {children}
      </Animated.ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        // snapPoints={["25%"]}
        enablePanDownToClose={true}
        style={{ zIndex: 3 }}
        animatedIndex={0}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={true}
      >
        <BottomSheetView>
          <View
            style={{
              zIndex: 3,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 14,
    paddingTop: 175,
    backgroundColor: "#fff",
    gap: 20,
  },
  /** Header */
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    paddingHorizontal: 14,
    paddingTop: 35,
    paddingBottom: 10,
    height: 150,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    gap: 8,
    elevation: 2,
  },
  headerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "600",
    // color: "#fff",
    // marginBottom: 6,
  },
  /** Avatar */
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
  /** Input */
  input: {
    height: 46,
    backgroundColor: "#fff",
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StickyHeader;
