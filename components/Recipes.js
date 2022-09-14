import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { getData, recipeFilter } from "../functions";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { addedItemsContext } from "../context";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [items, setItems] = useState("cookingTime");
  const { addedItems } = useContext(addedItemsContext);

  const navigation = useNavigation();

  useEffect(() => {
    if (addedItems.length > 0) {
      recipeFilter(addedItems).then((res) => {
        setRecipes(res);
      });
    } else if (addedItems.length === 0) {
      getData(items).then((res) => {
        setRecipes(res);
      });
    }
  }, [addedItems, items]);

  return (
    <ScrollView>
      <Picker
        style={styles.sort}
        selectedValue={items}
        onValueChange={(itemValue, itemIndex) => {
          setItems(itemValue);
        }}
      >
        <Picker.Item label="Cooking Time" value="cookingTime" />
        <Picker.Item label="Name" value="name" />
        <Picker.Item label="Rating" value="rating" />
      </Picker>
      {recipes.map((recipe) => {
        return (
          <View style={styles.card} key={recipe.data.name}>
            <View style={styles.cardContent}>
              <Button
                title={recipe.data.name}
                onPress={() =>
                  navigation.navigate("Recipe", {
                    ingredients: recipe.data.ingredients,
                    directions: recipe.data.directions,
                    img: recipe.data.img,
                    name: recipe.data.name,
                    cookingTime: recipe.data.cookingTime,
                    id: recipe.id,
                    review: recipe.data.review,
                  })
                }
              />

              <Image
                style={styles.Img}
                source={{
                  uri: recipe.data.img,
                }}
              />
              <View>
                <Text style={styles.cookingtime}>
                  Cooking Time: {recipe.data.cookingTime}
                </Text>
              </View>
              {recipe.data.ingredients.map((ingredient, index) => {
                return (
                  <View key={index}>
                    <Text style={styles.ingredients}>
                      {ingredient.ingredient} {ingredient.amount}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  Img: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 230,
    height: 200,
  },
  cookingtime: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",

    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  ingredients: {
    textAlign: "center",
    fontWeight: "700",
  },
  sort: {
    backgroundColor: "orange",
    color: "brown",
    textAlign: "center",
    justifyContent: "center",
  },
});
