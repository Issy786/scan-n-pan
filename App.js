import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Title from "./components/title";
import NavBar from "./components/nav";

export default function App() {
  return (
    <NativeRouter>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
        <Title />
        <NavBar />
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
});
