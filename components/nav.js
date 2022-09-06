import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.button}>
        <Text>Barcode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "red",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 24,
  },
});

export default NavBar;
