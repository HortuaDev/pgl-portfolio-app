import { useState } from "react";
import { StyleSheet, View } from "react-native";
import QrImage from "./components/QrImage";
import PrincipalContent from "./components/PrincipalContent";
import Header from "./components/Header";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? <PrincipalContent /> : <QrImage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
