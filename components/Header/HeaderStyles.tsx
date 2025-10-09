import { StyleSheet } from "react-native";

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
  isDarkButtonWhite: { flex: 1, backgroundColor: "gray" },
  title: {
    flex: 4,
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  menuContainerWhite: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  infoButtonWhite: {
    width: "50%",
  },
  titleInfoButtonWhite: {
    shadowColor: "#000",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default styles;
