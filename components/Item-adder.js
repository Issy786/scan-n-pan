import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from "react-native";
import { addedItemsContext, itemContext } from "../context";
import { useNavigation } from "@react-navigation/native";

export const ItemAdder = () => {
  const navigation = useNavigation();
  const { item, setItem } = useContext(itemContext);
  const { addedItems, setAddedItems } = useContext(addedItemsContext);

  const handleAddItem = () => {
    const newItem = item.replace(/\s$|^\s/g, "");
    setAddedItems([newItem, ...addedItems]);
    setItem(null);
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addingITem}
      >
        <View>
          <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
        </View>
        <TextInput
          style={styles.input}
          placeholder={"Add Ingredient"}
          value={item}
          onChangeText={(text) => setItem(text.toLowerCase())}
        />
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addSymbol}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  addingITem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#0782F9",
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
    marginBottom: 3,
  },
  addWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: "#0782F9",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  addSymbol: {
    color: "#0782F9",
  },
});
