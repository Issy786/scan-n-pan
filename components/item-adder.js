import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

export const ItemAdder = ({ item, setItem, handleAddItem }) => {
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addingITem}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add Ingredient"}
          value={item}
          onChangeText={(text) => setItem(text)}
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
