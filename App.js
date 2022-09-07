import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";

import { ScrollView, StyleSheet, View, Text } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Title from "./components/title";
import NavBar from "./components/nav";

export default function App() {
  return (
    // <NativeRouter>
    //   <ScrollView>
    //     <View style={styles.container}>
    //       <StatusBar style="auto" />
    //     </View>
    //     <Title />
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" />
    //     </Routes>
    //   </ScrollView>
    //       </NativeRouter>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={Login}
//         />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
