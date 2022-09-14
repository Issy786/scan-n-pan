import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import { LogBox, StyleSheet, Image } from "react-native";
import {
  barcodeContext,
  itemContext,
  addedItemsContext,
  reviewContext,
} from "./context";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [barcodeData, setBarcodeData] = useState(null);
  const [item, setItem] = useState();
  const [addedItems, setAddedItems] = useState([]);
  const [newReview, setNewReview] = useState();

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  return (
    <itemContext.Provider value={{ item, setItem }}>
      <addedItemsContext.Provider value={{ addedItems, setAddedItems }}>
        <barcodeContext.Provider value={{ barcodeData, setBarcodeData }}>
          <reviewContext.Provider value={{ newReview, setNewReview }}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerTitleAlign: "center",
                  headerBackground: () => (
                    <Image
                      style={StyleSheet.absoluteFill}
                      source={{
                        uri: "https://i.ibb.co/18y5QzH/scannpan.jpg",
                      }}
                    />
                  ),
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
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
                <Stack.Screen
                  name="Scanner"
                  component={Scanner}
                  options={{ title: "" }}
                />
                <Stack.Screen name="Recipes" component={Recipes} />
                <Stack.Screen
                  name="Recipe"
                  component={Recipe}
                  options={{ title: "" }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </reviewContext.Provider>
        </barcodeContext.Provider>
      </addedItemsContext.Provider>
    </itemContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  header: {
    color: "red",
  },
});
