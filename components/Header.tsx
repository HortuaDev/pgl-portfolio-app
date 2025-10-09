import { useState } from "react";
import React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
  bodyStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
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
