import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Item } from "./Items";

export const ItemList = ({ addedItems, removeItem }) => {
  return (
    <View>
      {addedItems.map((value, index) => {
        return (
          <View key={index} style={styles.itemAdded}>
            <Item style={styles.ItemText} text={value} />
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.del}>Del</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemAdded: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ItemText: {
    padding: 20,
  },
  del: {
    borderColor: "tomato",
    color: "tomato",
    borderRadius: 10,
    borderWidth: 1,
    padding: 2,
    marginBottom: 2,
  },
});
