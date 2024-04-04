import { View, Text } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const BillDetails = () => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 10,
          borderBottomColor: color.border,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Bill details</Text>
      </View>
      <View style={{ gap: 10, paddingVertical: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>MRP</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            +₹210
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textLink }}>Product discount</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 400,
              fontSize: 12,
              color: color.textLink,
            }}
          >
            -₹38
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Item Total</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            +₹172
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Surge charge</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            +₹30
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Surge charge</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            +₹25
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ textAlign: "left", width: "50%", fontWeight: 500 }}>
            Bill total
          </Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            ₹227
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BillDetails;
