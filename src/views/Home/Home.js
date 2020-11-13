import React from "react";
import { StatusBar, View } from "react-native";
import Footer from "../../componentes/Footer/Footer.js";
import Header from "../../componentes/header/Header.js";
import { CORES } from "../../Utils/Cores.js";
import ICONES_SVG from "../../Utils/IconesSvg";
import styles from "./Home.styles.js";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={CORES.PRIMARIA} />
      <Header mostrarNotificacao={true} />
      <Footer icone={ICONES_SVG.ADICIONAR} />
    </View>
  );
};

export default Home;
