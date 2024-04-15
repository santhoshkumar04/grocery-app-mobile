import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../screens";
import Splash from "../screens/Splash";
import Auth from "../screens/auth/Auth";
import { BottomTabNav } from "./BottomTabNav";
import OtpVerify from "../screens/auth/OtpVerify";
import ProductDetails from "../screens/ProductDetails";
import Profile from "../screens/Profile";
import Wallet from "../screens/tabs/Wallet";
import Order from "../screens/tabs/Order";
import Address from "../screens/Address";
import AccountAndPrivacy from "../screens/AccountAndPrivacy";
import Notification from "../screens/Notification";
import AboutUs from "../screens/AboutUs";
import CustomerSupport from "../screens/CustomerSupport";
import OrderSummary from "../screens/OrderSummary";
import AddAddress from "../screens/AddAddress";
import SaveAddress from "../screens/SaveAddress";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
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
      <Stack.Screen name={SCREENS.ADDADDRESS} component={AddAddress} />
      <Stack.Screen name={SCREENS.SAVEADDRESS} component={SaveAddress} />
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
