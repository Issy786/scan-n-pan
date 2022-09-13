import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import { LogBox, StyleSheet, Image } from "react-native";
import { barcodeContext, itemContext, addedItemsContext } from "./context";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [barcodeData, setBarcodeData] = useState(null);
  const [item, setItem] = useState();
  const [addedItems, setAddedItems] = useState([]);

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  return (
    <itemContext.Provider value={{ item, setItem }}>
      <addedItemsContext.Provider value={{ addedItems, setAddedItems }}>
        <barcodeContext.Provider value={{ barcodeData, setBarcodeData }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerBackground: () => (
                  <Image
                    style={StyleSheet.absoluteFill}
                    source={{
                      uri: "https://pantalking.com/wp-content/uploads/2022/04/What-Is-Non-Stick-Pan.jpg",
                    }}
                  />
                ),
                headerTintColor: "white",
                headerTitleStyle: {
                  fontWeight: "900",
                },
              }}
            >
              <Stack.Screen
                options={{ headerShown: true, title: "" }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "" }}
              />
              <Stack.Screen name="Scanner" component={Scanner} />
              <Stack.Screen name="Recipes" component={Recipes} />
              <Stack.Screen
                name="Recipe"
                component={Recipe}
                options={{ title: "" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </barcodeContext.Provider>
      </addedItemsContext.Provider>
    </itemContext.Provider>
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
  header: {
    color: "red",
  },
});
