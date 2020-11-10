import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ICONES_SVG from "../../Utils/IconesSvg";
import styles from "./Header.styles.js";

const Header = ({ mostrarNotificacao, mostrarVoltar }) => {
  mostrarVoltar = false;
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.botaoEsquerda}>
        {(mostrarVoltar && ICONES_SVG.VOLTAR) || ICONES_SVG.QR_CODE}
      </TouchableOpacity>
      <View style={styles.letra}>{ICONES_SVG.LETRA}</View>
      {mostrarNotificacao && (
        <TouchableOpacity style={styles.notificacao}>
          {ICONES_SVG.SINO}
          <Text style={styles.textoNotificacao}>4</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
