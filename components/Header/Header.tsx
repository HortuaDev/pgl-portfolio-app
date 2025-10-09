import React from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import styles from "../../styles/HeaderStyles";

interface HeaderProps {
  setDisplayMyQR: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Header = ({ setDisplayMyQR, setIsDarkMode, isDarkMode }: HeaderProps) => {
  const ICON_MOON = require("../../assets/icon_moon.png");
  const ICON_SUN = require("../../assets/icon_sun_white.png");

  return (
    <View
      style={isDarkMode ? styles.topContainerDark : styles.topContainerWhite}
    >
      <View
        style={
          isDarkMode
            ? styles.headerContainerTopDark
            : styles.headerContainerTopWhite
        }
      >
        <Text style={isDarkMode ? styles.titleDark : styles.titleWhite}>
          My Portfolio App
        </Text>
        <Pressable
          onPress={() => (setDisplayMyQR(true), setIsDarkMode(!isDarkMode))}
        >
          <Image
            source={isDarkMode ? ICON_SUN : ICON_MOON}
            style={
              isDarkMode ? styles.isDarkButtonDark : styles.isDarkButtonWhite
            }
          ></Image>
        </Pressable>
      </View>

      <View
        style={
          isDarkMode ? styles.menuContainerDark : styles.menuContainerWhite
        }
      >
        <Pressable
          style={isDarkMode ? styles.infoButtonDark : styles.infoButtonWhite}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text
            style={
              isDarkMode
                ? styles.titleInfoButtonDark
                : styles.titleInfoButtonWhite
            }
          >
            Mi info
          </Text>
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
