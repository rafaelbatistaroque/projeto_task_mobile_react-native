import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Footer.styles.js";

const Footer = ({ icone }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.botaoAdicionar}>{icone}</TouchableOpacity>
      <Text style={styles.textoFooter}>Task - Organizar é nossa tarefa</Text>
    </View>
  );
};

export default Footer;
