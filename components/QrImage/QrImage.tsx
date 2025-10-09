import { View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import styles from "./QrImageStyles";

interface QRProps {
  isDarkMode: boolean;
}

const QrImage = ({ isDarkMode }: QRProps) => {
  return (
    <View style={styles.bodyStylesWhite}>
      <View style={styles.QrContainerWhite}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

export default QrImage;
