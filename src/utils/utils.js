import { Share } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Location from "expo-location";

export const shareAction = async (title, message, url) => {
  try {
    const result = Share.share({
      title: title,
      // Android
      message: message,
      //ios
      url: url,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        console.log("shared with activity", result.activityType);
      } else {
        // shared
        console.log("shared");
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.log("Share Action Error", error);
  }
};

export const renderWebBrowserAsync = async (url) => {
  await WebBrowser.openBrowserAsync(url);
};

export const getUserLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  return location.coords;

  // return new Promise((resolve, reject) => {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       userGeolocation.latitude = position.coords.latitude;
  //       userGeolocation.longitude = position.coords.longitude;
  //       resolve();
  //     },
  //     function (err) {
  //       reject(Error(err));
  //     }
  //   );
  // });
};
