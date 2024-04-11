import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { vegetables } from "../../constants/vegetables";
import { color } from "../../constants/Color";
import { useNavigation } from "@react-navigation/native";
import CatagoryCardItem from "../../components/CatagoryCardItem";

const Catagorys = () => {
  const [selectedId, setSelectedId] = useState();
  const nav = useNavigation();

  const renderSideItem = ({ item }) => {
    return (
      <CatagoryCardItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        selected={selectedId}
      />
    );
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          flexShrink: 1,
          width: 80,
          flexDirection: "column",
          backgroundColor: color.primaryLight,
          borderRightColor: color.test,
          borderRightWidth: 1,
          shadowOffset: { width: 2, height: 2 },
          shadowColor: color.textBase,
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 4,
        }}
      >
        <View
          style={{
            top: 35,
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <IonicIcon onPress={() => nav.goBack()} name="arrow-back" size={24} />
        </View>
        <FlatList
          data={vegetables}
          showsVerticalScrollIndicator={false}
          extraData={selectedId}
          keyExtractor={(item) => item.id}
          style={{
            top: 35,
            paddingTop: 5,
            marginBottom: 30,
          }}
          renderItem={renderSideItem}
        />
      </View>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 14, paddingTop: 3 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {[...new Array(6)].map((item, i) => (
            <View key={i}>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Vegatables
                </Text>
              </View>
              <FlatList
                numColumns="3"
                data={vegetables}
                scrollEnabled={false}
                style={{}}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, i }) => (
                  <TouchableOpacity
                    key={i}
                    style={{
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "32%",
                      padding: 6,
                      borderRadius: 12,
                      gap: 5,
                      marginBottom: 6,
                      marginRight: 6,
                      // opacity: 0.4,
                      // backgroundColor: "blue",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      resizeMode="contain"
                      style={{
                        width: "100%",
                        height: 80,
                        backgroundColor: "white",
                        borderRadius: 12,
                      }}
                    />
                    <Text
                      numberOfLines={2}
                      style={{
                        textAlign: "center",
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Catagorys;
