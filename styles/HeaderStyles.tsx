import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  topContainerWhite: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  headerContainerTopWhite: {
    flex: 1,
    flexDirection: "row",
  },
  isDarkButtonWhite: { flex: 1, backgroundColor: Colors.primary_color_white },
  titleWhite: {
    flex: 4,
    backgroundColor: Colors.primary_color_white,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menuContainerWhite: {
    flexDirection: "row",
    backgroundColor: Colors.secondary_color_white,
    justifyContent: "center",
    alignItems: "center",
  },
  infoButtonWhite: {
    width: "50%",
  },
  titleInfoButtonWhite: {
    shadowColor: Colors.secondary_color_white,
    color: Colors.text_color_primary_white,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  topContainerDark: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
    backgroundColor: Colors.primary_color_dark,
  },
  headerContainerTopDark: {
    flex: 1,
    flexDirection: "row",
  },
  isDarkButtonDark: {
    flex: 1,
    backgroundColor: Colors.primary_color_dark,
  },
  titleDark: {
    flex: 4,
    backgroundColor: Colors.primary_color_dark,
    color: Colors.text_color_primary_dark,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menuContainerDark: {
    flexDirection: "row",
    backgroundColor: Colors.primary_color_dark,
    justifyContent: "center",
    alignItems: "center",
  },
  infoButtonDark: {
    width: "50%",
  },
  titleInfoButtonDark: {
    shadowColor: Colors.tertiary_color_white,
    color: Colors.text_color_primary_dark,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default styles;
