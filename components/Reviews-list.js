import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Reviews({ value }) {
  if (value) {
    return (
      <View style={styles.card}>
        {value.map((data, index) => {
          return (
            <View key={index}>
              <Text style={styles.cardContent}>{data}</Text>
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
    backgroundColor: "beige",
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
    fontWeight: "500",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#ADD8E6",
    shdowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    textAlign: "center",
    margin: 3,
  },
});
