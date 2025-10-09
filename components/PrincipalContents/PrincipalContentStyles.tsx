import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyStylesWhite: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatarWhite: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  contentItemWhite: {
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
  contentImageWhite: { flexDirection: "row", alignItems: "center" },
  contentTextWhite: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionTextWhite: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  likesTextWhite: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  ScrollViewStyleWhite: { padding: 10 },
});

export default styles;
