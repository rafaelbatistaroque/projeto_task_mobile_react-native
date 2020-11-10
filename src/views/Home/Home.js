import React from "react";
import { StatusBar, View } from "react-native";
import Header from "../../componentes/header/Header.js";
import { CORES } from "../../Utils/Cores.js";
import styles from "./Home.styles.js";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={CORES.PRIMARIA} />
      <Header mostrarNotificacao={true} />
    </View>
  );
};

export default Home;
