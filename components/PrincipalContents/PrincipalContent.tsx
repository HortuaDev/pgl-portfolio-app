import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./PrincipalContentStyles";

interface PrincipalProps {
  isDarkMode: boolean;
}

const PrincipalContent = ({ isDarkMode }: PrincipalProps) => {
  const likesItems = [
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
    <View style={styles.bodyStylesWhite}>
      <View>
        <View style={styles.contentImageWhite}>
          <Image
            style={styles.avatarWhite}
            source={require("../../assets/SofyanAmrabat.jpg")}
          ></Image>
          <View style={styles.contentTextWhite}>
            <Text style={styles.descriptionTextWhite}>
              Descripción sobre mí!
            </Text>
            <Text>
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <Text style={styles.likesTextWhite}>cosas que me gustan mucho:</Text>
        <ScrollView style={styles.ScrollViewStyleWhite}>
          {likesItems.map((element) => (
            <Text key={element} style={styles.contentItemWhite}>
              {element}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PrincipalContent;
