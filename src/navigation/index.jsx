import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../Screens";
import Splash from "../Screens/Splash";
import Auth from "../Screens/auth/Auth";
import { BottomTabNav } from "./BottomTabNav";
import OtpVerify from "../Screens/auth/OtpVerify";
import ProductDetails from "../Screens/ProductDetails";
import Profile from "../Screens/Profile";
import Wallet from "../Screens/tabs/Wallet";
import Order from "../Screens/tabs/Order";
import Address from "../Screens/Address";
import AccountAndPrivacy from "../Screens/AccountAndPrivacy";
import Notification from "../Screens/Notification";
import AboutUs from "../Screens/AboutUs";
import CustomerSupport from "../Screens/CustomerSupport";
import OrderSummary from "../Screens/OrderSummary";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
      <Stack.Screen name={SCREENS.AUTH} component={Auth} />
      <Stack.Screen name={SCREENS.OTPVERIFY} component={OtpVerify} />
      <Stack.Screen name={SCREENS.HOME} component={BottomTabNav} />
      <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
      <Stack.Screen name={SCREENS.PRODUCTDETAILS} component={ProductDetails} />
      <Stack.Screen name={SCREENS.WALLET} component={Wallet} />
      <Stack.Screen name={SCREENS.ORDERS} component={Order} />
      <Stack.Screen name={SCREENS.ADDRESS} component={Address} />
      <Stack.Screen name={SCREENS.ORDERSSUMMARY} component={OrderSummary} />
      <Stack.Screen
        name={SCREENS.ACCOUNTANDPRIVACY}
        component={AccountAndPrivacy}
      />
      <Stack.Screen
        name={SCREENS.CUSTOMERSUPPORT}
        component={CustomerSupport}
      />
      <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Stack.Screen name={SCREENS.ABOUTUS} component={AboutUs} />
    </Stack.Navigator>
  );
}
