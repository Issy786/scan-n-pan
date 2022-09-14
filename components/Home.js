import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { ItemAdder } from "./Item-adder";
import { ItemList } from "./Item-list";
import Recipes from "./Recipes";

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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.itemWrapper}>
            <Text style={styles.sectionTile}>Ingredients</Text>
            <ItemAdder />
            <View style={styles.tile}>
              <ScrollView>
                <ItemList />
              </ScrollView>
            </View>
          </View>
          <Recipes />
        </View>
        <View style={styles.user}>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: "tomato",
    width: "30%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  user: {
    marginTop: 10,
    padding: 10,
  },
  itemWrapper: {
    padding: 5,
    paddingHorizontal: 20,
  },
  sectionTile: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  tile: {
    height: 150,
    width: 375,
    borderColor: "tomato",
    borderWidth: 5,
    borderRadius: 10,
    padding: 5,
  },
});
