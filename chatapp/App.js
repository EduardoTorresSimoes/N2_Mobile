import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import { Cadastro } from "./components/Cadastro";
import { Chat } from "./components/Chat";
import { Contatos } from "./components/Contatos";
import { ContatosConversando } from "./components/ContatosConversando";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar backgroundColor="#101215" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: "#101215" },
            }}
          >
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ tabBarVisible: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ tabBarVisible: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ tabBarVisible: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ tabBarVisible: false }}
            />
            <Stack.Screen
              name="Contatos"
              component={Contatos}
              options={{ tabBarVisible: false }}
            />
            <Stack.Screen
              name="ContatosConversando"
              component={ContatosConversando}
              options={{ tabBarVisible: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101215",
  },
});
