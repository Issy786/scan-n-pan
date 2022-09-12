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
import { Picker } from "@react-native-picker/picker";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [items, setItems] = useState("cookingTime");

  const navigation = useNavigation();

  useEffect(() => {
    getData(items).then((res) => {
      setRecipes(res);
    });
  }, [items]);

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
          <View style={styles.card} key={recipe.name}>
            <View style={styles.cardContent}>
              <Button
                title={recipe.name}
                onPress={() =>
                  navigation.navigate("Recipe", {
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
              {recipe.ingredients.map((ingredient, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {ingredient.ingredient} {ingredient.amount}
                    </Text>
                  </View>
                );
              })}
              <Text>{recipe.directions}</Text>
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
  testImg: {
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
