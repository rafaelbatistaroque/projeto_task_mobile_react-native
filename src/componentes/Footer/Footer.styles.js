import { StyleSheet } from "react-native";
import { CORES } from "../../Utils/Cores";

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 70,
    borderTopWidth: 5,
    padding: 20,
    backgroundColor: CORES.PRIMARIA,
    borderTopColor: CORES.ENFASE,
    alignItems: "center",
    position: "relative",
  },
  botaoAdicionar: {
    width: 70,
    height: 70,
    position: "absolute",
    top: -40,
  },
  textoFooter: {
    color: CORES.BRANCA,
    fontWeight: "bold",
    position: "absolute",
    bottom: 3,
  },
});

export default styles;
