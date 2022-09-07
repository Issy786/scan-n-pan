import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { getData } from "../functions";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

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
            <Text>{recipe.name}</Text>
            <Image
              style={styles.testImg}
              source={{
                uri: recipe.img,
              }}
            />
            <Text>{recipe.ingredients}</Text>
            <Text>{recipe.Directions}</Text>
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
