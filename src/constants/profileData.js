import { SCREENS } from "../screens";

export const profile = [
  {
    header: "YOUR INFORMATION",
    items: [
      {
        title: "Your orders",
        view: SCREENS.ORDERS,
        icon: "reader-outline",
        type: "navication",
      },
      {
        title: "Address",
        view: SCREENS.ADDRESS,
        icon: "location-outline",
        type: "navication",
      },
      {
        title: "Account privacy",
        view: SCREENS.ACCOUNTANDPRIVACY,
        icon: "shield-checkmark-outline",
        type: "navication",
      },
    ],
  },
  {
    header: "OTHER INFORMATION",
    items: [
      {
        title: "Share the app",
        view: "share",
        icon: "share-outline",
        type: "function",
      },
      {
        title: "Payment methods",
        view: SCREENS.NOTIFICATION,
        icon: "card-outline",
        type: "navication",
      },
      {
        title: "Notification preferenced",
        view: SCREENS.NOTIFICATION,
        icon: "notifications-outline",
        type: "navication",
      },
      {
        title: "Help",
        view: "CustomerSupport",
        icon: "chatbox-ellipses-outline",
        type: "navication",
      },
      {
        title: "About us",
        view: SCREENS.ABOUTUS,
        icon: "information-circle-outline",
        type: "navication",
      },
      {
        title: "Log out",
        action: "logout",
        icon: "power-outline",
        type: "function",
      },
    ],
  },
];
