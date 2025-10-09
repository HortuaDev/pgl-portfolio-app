import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "../../styles/PrincipalContentStyles";

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
    <View style={isDarkMode ? styles.bodyStylesDark : styles.bodyStylesWhite}>
      <View>
        <View
          style={
            isDarkMode ? styles.contentImageDark : styles.contentImageWhite
          }
        >
          <Image
            style={isDarkMode ? styles.avatarDark : styles.avatarWhite}
            source={require("../../assets/SofyanAmrabat.jpg")}
          ></Image>
          <View
            style={
              isDarkMode ? styles.contentTextDark : styles.contentTextWhite
            }
          >
            <Text
              style={
                isDarkMode
                  ? styles.descriptionTitleDark
                  : styles.descriptionTitleWhite
              }
            >
              Descripción sobre mí!
            </Text>
            <Text
              style={
                isDarkMode
                  ? styles.descriptionTextDark
                  : styles.descriptionTextWhite
              }
            >
              Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos
            </Text>
          </View>
        </View>
        <Text style={isDarkMode ? styles.likesTextDark : styles.likesTextWhite}>
          cosas que me gustan mucho:
        </Text>
        <ScrollView style={styles.ScrollViewStyle}>
          {likesItems.map((element) => (
            <Text
              key={element}
              style={
                isDarkMode ? styles.contentItemDark : styles.contentItemWhite
              }
            >
              {element}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PrincipalContent;
