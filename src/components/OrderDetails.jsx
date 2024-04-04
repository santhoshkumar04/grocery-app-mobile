import { View, Text } from "react-native";
import React from "react";
import { color } from "../constants/Color";

const OrderDetails = () => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 10,
          borderBottomColor: color.border,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Order details</Text>
      </View>
      <View style={{ gap: 10, paddingVertical: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Order ID:</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 500,
              fontSize: 12,
              color: color.textBase,
            }}
          >
            ORD25847369
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Payment:</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 500,
              fontSize: 12,
              color: color.textBase,
            }}
          >
            Paid: using upi(₹500)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Order placed:</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 500,
              fontSize: 12,
              color: color.textBase,
            }}
          >
            03-Apr-2024 at 10:30 AM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: color.textMuted }}>Deliverd to:</Text>
          <Text
            style={{
              textAlign: "right",
              width: "50%",
              fontWeight: 500,
              fontSize: 12,
              color: color.textBase,
            }}
            numberOfLines={2}
          >
            Santhos, 26 tv amman kovil street arumbakkam chennai
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;
