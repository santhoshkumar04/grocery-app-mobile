import { View, Text } from "react-native";
import React from "react";

const SaveAddress = ({ navigation, route }) => {
  const { location } = route.params;
  return (
    <View>
      <Text>SaveAddress</Text>
      <Text>{location.latitude}</Text>
      <Text>{location.longitude}</Text>
      <Text>{location.latitudeDelta}</Text>
      <Text>{location.longitudeDelta}</Text>
    </View>
  );
};

export default SaveAddress;
