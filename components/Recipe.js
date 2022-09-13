import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Rating from "./Rating";
import Review from "./Review-adder";
import Reviews from "./Reviews-list";

export default function Recipe() {
  const route = useRoute();

  return (
    <ScrollView style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{route.params.name}</Text>
        <Image
          style={styles.Img}
          source={{
            uri: route.params.img,
          }}
        />
        <Text style={styles.card}>Cooking Time:{route.params.cookingTime}</Text>
        <Text style={styles.title}>Ingredients:</Text>
        {route.params.ingredients.map((ingredient, index) => {
          return (
            <View key={index} style={styles.card}>
              <Text>
                {ingredient.ingredient} {ingredient.amount}
              </Text>
            </View>
          );
        })}
        <Text style={styles.title}>Directions:</Text>
        <Text style={styles.cardContent}>{route.params.directions}</Text>
      </View>
      <Rating value={route.params.id} />
      <Text style={styles.reviewsTitle}>Reviews</Text>
      <Review value={route.params.id} />
      <Reviews value={route.params.review} />
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
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    backgroundColor: "beige",
    borderRadius: 6,
    elevation: 3,
    padding: 5,
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  Img: {
    flexDirection: "row",
    flex: 1,
    margin: "auto",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: "10%",
    marginVertical: 6,
    width: "80%",
    height: 190,
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
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",

    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  reviewsTitle: {
    textAlign: "center",
    backgroundColor: "#ADD8E6",
    fontSize: 18,
    fontWeight: "700",
    width: "30%",
    marginHorizontal: "35%",
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
});
