import { StyleSheet } from "react-native";

export const colors = {
  block: "red"
};

export const home = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  box: {
    height: 20,
    width: 20,
    backgroundColor: colors.block
  }
});
