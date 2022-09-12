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
import { ItemAdder } from "./Item-adder";
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
  const username = auth.currentUser.email.split("@")[0];
  return (
    <View style={styles.container}>
      <Text style={styles.usernameText}>{username}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
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
    width: "50%",
    fontSize: 16,
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 2,
    borderStyle: "solid",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
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
    padding: 5,
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
