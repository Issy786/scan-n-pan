import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { getData } from "../functions";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getData().then((res) => {
      setRecipes(res);
    });
  }, []);

  return (
    <ScrollView>
      {recipes.map((recipe) => {
        return (
          <View style={styles.recipe} key={recipe.name}>
            <Button
              title={recipe.name}
              onPress={() =>
                navigation.navigate("SingleRecipe", {
                  ingredients: recipe.ingredients,
                  directions: recipe.directions,
                  img: recipe.img,
                  name: recipe.name,
                  cookingTime: recipe.cookingTime,
                })
              }
            />

            <Image
              style={styles.testImg}
              source={{
                uri: recipe.img,
              }}
            />
            <Text>
              Cooking Time:{recipe.cookingTime}
              {"\n"}Ingredients:
            </Text>
            {recipe.ingredients.map((ingredient) => {
              return (
                <Text key={ingredient.ingredient}>
                  {ingredient.ingredient} {ingredient.amount}
                </Text>
              );
            })}
            <Text>{recipe.directions}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  testImg: {
    width: 66,
    height: 58,
  },
  recipe: {
    padding: "5%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
});
