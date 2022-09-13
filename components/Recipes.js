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
  }, [addedItems]);

  return (
    <ScrollView>
      <Picker
        style={{ width: 200 }}
        selectedValue={items}
        onValueChange={(itemValue, itemIndex) => {
          setItems(itemValue);
        }}
      >
        <Picker.Item label="Cooking Time" value="cookingTime" />
        <Picker.Item label="Ingredients" value="ingredients" />
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
              <Text>
                Cooking Time:{recipe.data.cookingTime}
                {"\n"}Ingredients:
              </Text>
              {recipe.data.ingredients.map((ingredient, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {ingredient.ingredient} {ingredient.amount}
                    </Text>
                  </View>
                );
              })}
              <Text>{recipe.data.directions}</Text>
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
    width: 80,
    height: 70,
  },
});
