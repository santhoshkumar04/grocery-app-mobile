import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "../constants/Color";
import { SCREENS } from "../Screens";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { tabData } from "../constants/tabData";

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{ headerShown: false, tabBarStyle: { height: 55 } }}
    >
      {tabData.map((t, i) => (
        <Tab.Screen
          key={i}
          initialRouteName={t.title}
          name={t.title}
          component={t.componet}
          options={{
            title: t.title,
            tabBarItemStyle: {
              marginVertical: 7,
            },
            tabBarIcon: ({ focused }) => (
              <IonicIcon
                name={t.iconname}
                color={focused ? color.primary : color.third}
                size={18}
              />
            ),
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.third,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 600,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
