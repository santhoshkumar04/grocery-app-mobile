import { Share } from "react-native";
import * as WebBrowser from "expo-web-browser";

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
