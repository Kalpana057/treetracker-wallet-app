import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ToggleInfo from "./ToggleInfo";

const WalletScreen: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wallet logo</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons
            name="search"
            size={24}
            color="black"
            style={styles.icon}
          />
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.createWalletContainer}>
          <MaterialIcons name="add" size={24} color="#888" />
          <Text style={styles.createWalletText}>CREATE WALLET</Text>
          <View style={styles.createWalletIcons}>
            <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
              <MaterialIcons name="info-outline" size={20} color="#888" />
            </TouchableOpacity>
            <MaterialIcons name="remove" size={20} color="#888" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your wallets</Text>

        <View style={styles.walletItem}>
          <View>
            <Text style={styles.walletName}>Wallet 2</Text>
            <Text style={styles.walletDate}>May 22, 2024</Text>
          </View>
          <View style={styles.walletDetails}>
            <Text style={styles.walletBalance}>1000</Text>
            <MaterialIcons name="chevron-right" size={24} color="#888" />
          </View>
        </View>

        <View style={styles.walletItem}>
          <View>
            <Text style={styles.walletName}>Wallet 1</Text>
            <Text style={styles.walletDate}>May 16, 2024</Text>
          </View>
          <View style={styles.walletDetails}>
            <Text style={styles.walletBalance}>3455</Text>
            <MaterialIcons name="chevron-right" size={24} color="#888" />
          </View>
        </View>
      </ScrollView>

      {/* Info Footer */}
      <ToggleInfo visible={showInfo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#8BC34A",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  content: {
    padding: 16,
  },
  createWalletContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  createWalletText: {
    flex: 1,
    marginLeft: 10,
    color: "#888",
    fontWeight: "bold",
  },
  createWalletIcons: {
    flexDirection: "row",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  walletItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  walletName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  walletDate: {
    fontSize: 12,
    color: "#888",
  },
  walletDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  walletBalance: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    marginRight: 5,
  },
});

export default WalletScreen;
