import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Title from "./components/title";
import NavBar from "./components/nav";
import { getData } from "./functions";
import { useState, useEffect } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setRecipes(res);
    });
  }, []);

  return (
    <NativeRouter>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
        <Title />
        <NavBar />
        <View>
          {recipes.map((recipe) => {
            return (
              <View key={recipe.name}>
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
        </View>
        <Routes>
          <Route path="/" />
        </Routes>
      </ScrollView>
    </NativeRouter>
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
});
