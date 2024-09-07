import { Text, View } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Banner from "../../components/Banner";
import ProductTitle from "../../components/ProductTitle";
import ProductCarousel from "../../components/ProductCarousel";
import { vegetables } from "../../constants/vegetables";
import { color } from "../../constants/Color";
import StickyHeader from "../../components/StickyHeader";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { getUserLocation, locationPermission } from "../../utils/utils";
import CarouselCards from "../../components/ui/CarouselCards";

const Home = () => {
  const bottomSheetRef = useRef(null);

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        style={{ zIndex: 3 }}
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  useEffect(() => {
    // locationPermission();
    getUserLocation();
  }, []);

  return (
    <>
      <View style={{ backgroundColor: color.secondary, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <StickyHeader handleOpenPress={handleOpenPress}>
            {/* <Banner /> */}
            <CarouselCards />
            <ProductTitle title="Exclusive Offer" />
            <ProductCarousel data={vegetables} />
            <ProductTitle title="Best Selling" />
            <ProductCarousel data={vegetables} />
            <ProductTitle title="Best Selling" />
            <ProductCarousel data={vegetables} />
          </StickyHeader>
          <StatusBar />
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["10", "25%"]}
        enablePanDownToClose={true}
        style={{ zIndex: 2 }}
        animatedIndex={0}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={true}
      >
        <BottomSheetView>
          <View
            style={{
              zIndex: 2,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
            <Text>This is the content of the Bottom Sheet</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default Home;
