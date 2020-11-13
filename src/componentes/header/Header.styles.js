import { StyleSheet } from "react-native";
import { CORES } from "../../Utils/Cores";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: CORES.PRIMARIA,
    borderBottomWidth: 5,
    borderBottomColor: CORES.ENFASE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  botaoEsquerda: {
    padding: 10,
    borderRadius: 20,
  },
  notificacao: {
    position: "relative",
    padding: 10,
    borderRadius: 25,
  },
  letra: {
    flex: 1,
    alignItems: "center",
  },
  textoNotificacao: {
    backgroundColor: CORES.BRANCA,
    position: "absolute",
    textAlign: "center",
    color: CORES.ENFASE,
    padding: 4,
    lineHeight: 15,
    width: 20,
    height: 20,
    borderRadius: 10,
    left: 22,
    top: 8,
  },
});

export default styles;
