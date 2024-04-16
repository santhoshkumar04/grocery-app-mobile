import { PermissionsAndroid, Platform, Share } from "react-native";
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

// export const getCurrentLocation = async () => {
//   console.log("getCurrentLocations helperr");
//   await new Promise((resolve, reject) => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         console.log("position", position);
//         const cords = {
//           latitude: position?.coords?.latitude,
//           longitude: position?.coords?.longitude,
//           heading: position?.coords?.heading,
//         };
//         resolve(cords);
//       },
//       (error) => {
//         console.log("rejects", error.message);
//         reject(error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   });
//   console.log("getloc end");
// };

export const getUserLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  console.log(status);
  if (status !== "granted") {
    await Location.requestForegroundPermissionsAsync();
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

// export const locationPermission = () =>
//   new Promise(async (resolve, reject) => {
//     if (Platform.OS === "ios") {
//       try {
//         const permissionStatus = await Geolocation.requestAuthorization(
//           "whenInUse"
//         );
//         if (permissionStatus === "granted") {
//           return resolve("granted");
//         }
//         reject("Permission not granted");
//       } catch (error) {
//         return reject(error);
//       }
//     }
//     return PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     )
//       .then((granted) => {
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           resolve("granted");
//         }
//         return reject("Location Permission denied");
//       })
//       .catch((error) => {
//         console.log("Ask Location permission error: ", error);
//         return reject(error);
//       });
//   });
