import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { color } from "../constants/Color";
import { MaterialIcons } from "@expo/vector-icons";
import {
  getCurrentLocation,
  getUserLocation,
  locationPermission,
} from "../utils/utils";
import { SCREENS } from ".";

const AddAddress = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 13.081066234765593,
    longitude: 80.20168177266935,
    latitudeDelta: 0.0016214846145370387,
    longitudeDelta: 0.0011355802416801453,
  });
  //   const [mapRegion, setmapRegion] = useState({
  //     latitude: 13.081066234765593,
  //     longitude: 80.20168177266935,
  //     latitudeDelta: 0.0016214846145370387,
  //     longitudeDelta: 0.0011355802416801453,
  //   });
  const mapRef = useRef(null);

  const handleUserLocation = () => {
    getUserLocation().then((user) => {
      setCurrentLocation({
        latitude: user.latitude,
        longitude: user.longitude,
        latitudeDelta: 0.0016214846145370387,
        longitudeDelta: 0.0011355802416801453,
      });
      if (mapRef) {
        mapRef.current.animateToRegion({
          latitude: user.latitude,
          longitude: user.longitude,
          latitudeDelta: 0.04175028550215565,
          longitudeDelta: 0.029251836240291595,
        });
      }
    });
  };

  // const getUserCurrentloctio = async () => {
  //   console.log("getUserCurrentloctio");
  //   const locPermissionDenied = await locationPermission();
  //   console.log(locPermissionDenied);
  //   if (locPermissionDenied === "granted") {
  //     console.log("inside condition");
  //     // const { cords } = getCurrentLocation();
  //     // console.log(cords);
  //     const { latitude, longitude, heading } = getCurrentLocation();
  //     console.log(latitude, longitude, heading);
  //   }
  //   console.log("inside outine");
  // };

  useEffect(() => {
    // getUserCurrentloctio();
    getUserLocation()
      .then((location) => {
        if (location) {
          setCurrentLocation({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.04175028550215565,
            longitudeDelta: 0.029251836240291595,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(currentLocation);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" />
      <View style={{ flex: 0.8, position: "relative" }}>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={false}
          initialRegion={currentLocation}
          onRegionChange={(region) => setCurrentLocation(region)}
          //   region={location}
        >
          {/* <Circle
            center={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
            radius={100}
            strokeWidth={1.5}
            strokeColor={"#1a66ff"}
            fillColor={"rgba(230,238,255,0.7)"}
          /> */}
          <Marker coordinate={currentLocation} title="Marker">
            <Image
              style={{ height: 60, width: 60, resizeMode: "contain" }}
              source={require("../../assets/icons8-map-pin-80.png")}
            />
          </Marker>
        </MapView>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => handleUserLocation()}
            activeOpacity={0.6}
            underlayColor="#"
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 6,
              backgroundColor: color.secondary,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: color.primary,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 2,
            }}
          >
            <MaterialIcons name="my-location" size={20} color={color.primary} />
            <Text style={{ fontSize: 14, color: color.primary }}>
              Go to current location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          backgroundColor: color.secondary,
          padding: 14,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          Delivering your order to
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            backgroundColor: "#ffffc0",
            borderRadius: 12,
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <Image
            style={{ height: 40, width: 40, resizeMode: "contain" }}
            source={require("../../assets/icons8-map-pin-80.png")}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>adasd</Text>
            <Text>
              {currentLocation.latitude}, {currentLocation.longitude}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREENS.SAVEADDRESS, {
              location: currentLocation,
            })
          }
          style={{
            backgroundColor: color.primary,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
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
            Confirm Location & Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;
