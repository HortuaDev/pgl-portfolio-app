import { useState } from "react";
import { View } from "react-native";
import { QrImage } from "./components/index";
import { PrincipalContent } from "./components/index";
import { Header } from "./components/index";
import styles from "./styles/globalStyles";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header
        setDisplayMyQR={setDisplayMyQR}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      {displayMyQR ? (
        <PrincipalContent isDarkMode={isDarkMode} />
      ) : (
        <QrImage isDarkMode={isDarkMode} />
      )}
    </View>
  );
}
