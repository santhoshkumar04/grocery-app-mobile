import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IonicIcon from "@expo/vector-icons/Ionicons";
import { color } from "../../constants/Color";

const Accordion = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);
  const body = <View style={styles.accordBody}>{children}</View>;

  function toggleItem() {
    setExpanded(!expanded);
  }
  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <IonicIcon
          name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color={color.textBase}
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    paddingVertical: 12,
    color: color.textBase,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accordTitle: {
    fontWeight: "600",
    fontSize: 17,
  },
  accordBody: {
    paddingVertical: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
