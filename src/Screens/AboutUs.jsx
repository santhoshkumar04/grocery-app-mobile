import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/ui/AppHeader";
import { color } from "../constants/Color";
import { renderWebBrowserAsync } from "../utils/utils";
import { StatusBar } from "expo-status-bar";

const AboutUs = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <AppHeader title={"About Us"} navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 14 }}
      >
        <Text style={{ fontSize: 20, paddingVertical: 20 }}>About Us</Text>
        <Text
          style={{
            fontWeight: 300,
            lineHeight: 18,
            fontSize: 13,
            paddingBottom: 30,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          ornare ligula, quis pharetra ligula. Vestibulum dignissim est ut dui
          efficitur, tincidunt rutrum quam volutpat. Vestibulum et enim sit amet
          arcu efficitur sodales ut a mauris. Phasellus condimentum enim sodales
          facilisis vulputate. Duis sit amet facilisis nibh. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Duis eu ultrices metus. Sed euismod est nisi, scelerisque
          molestie sem commodo accumsan. Ut iaculis magna orci, vel auctor nisi
          lobortis ut. In hac habitasse platea dictumst. Proin tempus, nulla
          sodales sagittis eleifend, tortor sem tempus mauris, nec tempus justo
          arcu nec massa. Aliquam ultrices auctor leo, nec consectetur urna
          suscipit et. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus a nisl felis. Cras semper
          finibus velit sed varius. Aenean lacinia laoreet tortor, eu pulvinar
          nisl. Morbi eu nulla tellus. Duis ut fermentum ante. Pellentesque
          porta hendrerit risus quis aliquet. Proin eget dui odio. Proin
          rhoncus, ex non dignissim luctus, urna nisl laoreet felis, ut
          sollicitudin ex neque eu ex. Nam aliquam dui id ligula faucibus, quis
          malesuada turpis tristique. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed nec ornare ligula, quis pharetra ligula.
          Vestibulum dignissim est ut dui efficitur, tincidunt rutrum quam
          volutpat. Vestibulum et enim sit amet arcu efficitur sodales ut a
          mauris. Phasellus condimentum enim sodales facilisis vulputate. Duis
          sit amet facilisis nibh. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Duis eu ultrices metus. Sed
          euismod est nisi, scelerisque molestie sem commodo accumsan. Ut
          iaculis magna orci, vel auctor nisi lobortis ut. In hac habitasse
          platea dictumst. Proin tempus, nulla sodales sagittis eleifend, tortor
          sem tempus mauris, nec tempus justo arcu nec massa. Aliquam ultrices
          auctor leo, nec consectetur urna suscipit et. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Vivamus a nisl felis. Cras semper finibus velit sed varius. Aenean
          lacinia laoreet tortor, eu pulvinar nisl. Morbi eu nulla tellus. Duis
          ut fermentum ante. Pellentesque porta hendrerit risus quis aliquet.
          Proin eget dui odio. Proin rhoncus, ex non dignissim luctus, urna nisl
          laoreet felis, ut sollicitudin ex neque eu ex. Nam aliquam dui id
          ligula faucibus, quis malesuada turpis tristique.
        </Text>
      </ScrollView>
      <View
        style={{
          // borderTopColor: color.border,
          // borderTopWidth: 1,
          // borderStyle: "solid",
          elevation: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => renderWebBrowserAsync("https://www.google.com")}
          style={{
            paddingHorizontal: 14,
            paddingVertical: 20,
            borderBottomColor: color.border,
            borderBottomWidth: 1,
            backgroundColor: color.secondary,
          }}
        >
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => renderWebBrowserAsync("https://www.facebook.com")}
          style={{
            paddingHorizontal: 14,
            paddingVertical: 20,
            borderBottomColor: color.border,
            borderBottomWidth: 1,
            backgroundColor: color.secondary,
          }}
        >
          <Text>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => renderWebBrowserAsync("https://www.facebook.com")}
          style={{
            paddingHorizontal: 14,
            paddingVertical: 20,
            backgroundColor: color.secondary,
            borderBottomColor: color.border,
            borderBottomWidth: 1,
          }}
        >
          <Text>Third-Party Licenses</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;
