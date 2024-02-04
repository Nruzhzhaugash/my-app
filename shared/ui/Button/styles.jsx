import { StyleSheet } from "react-native";
import { Fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  regularButton: {
    marginTop: 20,
    width: 260,
    padding: 12,
    alignSelf: "center",
    textAlign: 'center',
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: 'silver',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: "white",
  },
});