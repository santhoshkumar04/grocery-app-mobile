import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { color } from "../constants/Color";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Accordion from "../components/ui/Accordion";
import SingleProductAddCart from "../components/SingleProductAddCart";

const ProductDetails = ({ route }) => {
  const { name, image, quantity, id, price } = route.params.main;
  const nav = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, gap: 20, backgroundColor: color.secondary }}
    >
      <StatusBar backgroundColor={color.border} />
      <ScrollView>
        <View>
          <Image
            resizeMode="contain"
            source={{ uri: image }}
            style={{
              backgroundColor: color.border,
              height: 350,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 14,
              paddingVertical: 10,
              position: "absolute",
              top: 0,
            }}
          >
            <IonicIcon
              onPress={() => nav.goBack()}
              color={color.textBase}
              name="arrow-back-sharp"
              size={24}
            />
            <IonicIcon color={color.textBase} name="share-outline" size={24} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 14,
            flex: 1,
            backgroundColor: color.secondary,
            gap: 10,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: 700, color: color.textBase }}
            >
              {name}
            </Text>
            <Text
              style={{ fontSize: 16, color: color.textMuted, marginTop: 5 }}
            >
              {quantity}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: 600, color: color.textBase }}
            >
              ₹{price}
            </Text>
            <TouchableOpacity>
              <Text>2 Options</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Select Unit</Text>
            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "red",
                  borderRadius: 12,
                }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "red",
                  borderRadius: 12,
                }}
              />
            </View>
          </View>
          <Accordion title="Product Information">
            <Text>fsdsddfsdf sfdsd sdfsdf </Text>
          </Accordion>
        </View>
      </ScrollView>
      <SingleProductAddCart price={price} productId={id} quantity={quantity} />
    </SafeAreaView>
  );
};

export default ProductDetails;
