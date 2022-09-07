import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.usernameText}>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,

    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    position: "absolute",
    bottom: 35,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  usernameText: {
    width: "50%",
    backgroundColor: "white",
    color: "blue",
    fontSize: 16,
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 2,
    borderStyle: "solid",
    textAlign: "center",
  },
});
