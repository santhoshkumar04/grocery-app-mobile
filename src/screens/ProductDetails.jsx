import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { color } from "../constants/Color";
import IonicIcon from "@expo/vector-icons/Ionicons";
import Accordion from "../components/ui/Accordion";
import SingleProductAddCart from "../components/SingleProductAddCart";
import { vegetables } from "../constants/vegetables";
import Counters from "../components/ui/Counters";

const ProductDetails = ({ route, navigation }) => {
  const { _id } = route.params;

  const [ProductDetails, setProductDetails] = useState({});

  const getProductDratils = () => {
    const res = vegetables.find((product) => product?.id === _id);
    return res;
  };

  // Use effect to populate the state with data passed through navigation params

  useEffect(() => {
    const details = getProductDratils();
    setProductDetails(details);
  }, [_id]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.secondary }}>
      <StatusBar backgroundColor={color.border} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            resizeMode="contain"
            source={{ uri: ProductDetails.image }}
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
              onPress={() => navigation.goBack()}
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
            marginBottom: 100,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: 700, color: color.textBase }}
            >
              {ProductDetails.name}
            </Text>
            <Text
              style={{ fontSize: 16, color: color.textMuted, marginTop: 5 }}
            >
              {ProductDetails.quantity}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: 600, color: color.textBase }}
            >
              ₹{ProductDetails.price}
            </Text>
            <View>
              <Counters />
            </View>
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
            <Text>{ProductDetails.description} </Text>
          </Accordion>
        </View>
      </ScrollView>
      <SingleProductAddCart
        price={ProductDetails.price}
        productId={ProductDetails.id}
        quantity={ProductDetails.quantity}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
