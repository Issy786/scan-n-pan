import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { reviewContext } from "../context";

export default function Reviews({ value }) {
  const { newReview } = useContext(reviewContext);

  let newArr = [...value];
  if (value && newReview !== null) {
    newArr = [...value, newReview];
    return (
      <View>
        {newArr.map((data, index) => {
          return (
            <View key={index} style={styles.cardContent}>
              <Text style={styles.cardText}>{data}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
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
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "beige",
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
  },
  cardText: {
    fontWeight: "500",
    textAlign: "center",
    padding: 3,
    margin: 5,
  },
});
