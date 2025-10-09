import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import styles from "./HeaderStyles";

interface HeaderProps {
  setDisplayMyQR: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Header = ({ setDisplayMyQR, setIsDarkMode, isDarkMode }: HeaderProps) => {
  const ICON_MOON = require("../../assets/icon_moon.png");
  const ICON_SUN = require("../../assets/icon_sun.png");

  return (
    <View style={styles.topContainerWhite}>
      <View style={styles.headerContainerTopWhite}>
        <Text style={styles.title}>My Portfolio App</Text>
        <Pressable
          onPress={() => (setDisplayMyQR(true), setIsDarkMode(!isDarkMode))}
        >
          <Image
            source={isDarkMode ? ICON_SUN : ICON_MOON}
            style={styles.isDarkButtonWhite}
          ></Image>
        </Pressable>
      </View>

      <View style={styles.menuContainerWhite}>
        <Pressable
          style={styles.infoButtonWhite}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={styles.titleInfoButtonWhite}>Mi info</Text>
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
