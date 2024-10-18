import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ label, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333",
    width: 80,
    height: 80,
    margin: 5,
    padding: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "300",
  },
});
