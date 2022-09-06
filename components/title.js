import { View, Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text>Scan N Pan</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});
export default Title;
