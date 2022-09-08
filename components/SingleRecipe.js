import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SingleRecipe() {
  const route = useRoute();
  return (
    <View style={styles.recipe}>
      <Text>{route.params.name}</Text>
      <Image
        style={styles.testImg}
        source={{
          uri: route.params.img,
        }}
      />
      <Text>
        Cooking Time:{route.params.cookingTime}
        {"\n"}Ingredients:
      </Text>
      {route.params.ingredients.map((ingredient) => {
        return (
          <Text key={ingredient.ingredient}>
            {ingredient.ingredient} {ingredient.amount}
          </Text>
        );
      })}
      <Text>{route.params.directions}</Text>
    </View>
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
