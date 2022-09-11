import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import { LogBox, StyleSheet } from "react-native";
import { barcodeContext } from "./context";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [barcodeData, setBarcodeData] = useState(null);

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  return (
    <barcodeContext.Provider value={{ barcodeData, setBarcodeData }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#ADD8E6" },
            headerTintColor: "black",
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="Recipes" component={Recipes} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </barcodeContext.Provider>
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
