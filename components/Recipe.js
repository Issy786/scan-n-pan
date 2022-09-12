import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import Rating from "./Rating";

export default function Recipe() {
  const route = useRoute();

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{route.params.name}</Text>
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
      <Rating value={route.params.id} />
    </View>
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
    marginHorizontal: 4,
    marginVertical: 6,
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
  name: {
    alignContent: "center",
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
