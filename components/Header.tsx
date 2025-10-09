import { useState } from "react";
import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.menuContainer}>
        <Pressable
          style={styles.urlButton}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={styles.titleInfoButton}>Mi info</Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          accessibilityLabel="Un boton para el QR"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menuContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  urlButton: {
    width: "50%",
  },
  titleInfoButton: {
    shadowColor: "#000",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
