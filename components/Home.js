import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { ItemAdder } from "./item-adder";
import { ItemList } from "./item-list";
import Recipes from "./Recipes";

const Home = () => {
  const navigation = useNavigation();
  const [item, setItem] = useState();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddItem = () => {
    setAddedItems([...addedItems, item]);
    setItem(null);
  };

  const removeItem = (index) => {
    let itemsCopy = [...addedItems];
    itemsCopy.splice(index, 1);
    setAddedItems(itemsCopy);
  };

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
      <View style={styles.container}>
        <View style={styles.itemWrapper}>
          <Text style={styles.sectionTile}>Ingredients</Text>
          <ItemAdder
            item={item}
            setItem={setItem}
            handleAddItem={handleAddItem}
          />
          <View style={styles.tile}>
            <ScrollView>
              <ItemList addedItems={addedItems} removeItem={removeItem} />
            </ScrollView>
          </View>
          <TouchableOpacity>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Recipes />
      </View>
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
  itemWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTile: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tile: {
    height: 150,
    width: 375,
    borderColor: "#0782F9",
    borderWidth: 5,
    borderRadius: 10,
    padding: 5,
  },
  submit: {
    borderColor: "#0782F9",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 3,
    width: 60,
    margin: 3,
  },
});
