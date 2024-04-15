import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../constants/Color";
import { useNavigation } from "@react-navigation/native";

const ProductCarousel = ({ data }) => {
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("ProductDetails", { _id: item.id });
            }}
            activeOpacity={0.8}
            style={{
              width: 167,
              height: "auto",
              borderColor: color.border,
              borderWidth: 1,
              borderRadius: 12,
              marginRight: 17,
              gap: 5,
            }}
            key={index}
          >
            <Image
              style={{ height: 130, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={{ padding: 10 }}>
              <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: 500 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 12, color: color.textMuted }}>
                {item.quantity}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 500 }}>
                  ₹{item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => console.log(item.name)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    paddingVertical: 6,
                    paddingHorizontal: 10,
                    backgroundColor: color.primary,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: color.secondary,
                    }}
                  >
                    ADD
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductCarousel;
