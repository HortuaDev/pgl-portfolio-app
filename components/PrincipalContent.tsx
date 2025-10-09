import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const PrincipalContent = () => {
  const cosasQmeGustan = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cenar romántica",
  ];

  return (
    <View style={styles.bodyStyles}>
      <View>
        <View style={styles.contentImage}>
          <Image
            style={styles.avatar}
            source={require("./assets/SofyanAmrabat.jpg")}
          ></Image>
          <View style={styles.contentText}>
            <Text style={styles.descriptionText}>Descripción sobre mí!</Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <Text style={styles.likesText}>cosas que me gustan mucho:</Text>
        <ScrollView style={styles.ScrollViewStyle}>
          {cosasQmeGustan.map((element) => (
            <Text style={styles.contentItem}>{element}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PrincipalContent;

const styles = StyleSheet.create({
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
  contentItem: {
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
  contentImage: { flexDirection: "row", alignItems: "center" },
  contentText: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  likesText: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  ScrollViewStyle: { padding: 10 },
});
