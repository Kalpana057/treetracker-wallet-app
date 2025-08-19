import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  visible: boolean;
}

const ToggledInfo: React.FC<Props> = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good-to-know</Text>
      <Text style={styles.text}>You can have up to 2 wallets.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    color: "#555",
  },
});

export default ToggledInfo;
