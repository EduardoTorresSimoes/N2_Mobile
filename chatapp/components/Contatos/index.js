import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api from "../../API/api";

export const Contatos = ({ navigation }) => {
  const [usuarios, setUsuarios] = useState([]);
  

  const chatPressed = (user) => {
    navigation.navigate("Chat", { user });
  };

  const ConversasAtivasPressed = () => {
    navigation.navigate("ContatosConversando");
  };

  const getContatos = async () => {
    const user = await AsyncStorage.getItem("usuario").then((data) =>
      JSON.parse(data)
    );

    const contatos = await api.acharUsuariosConversa(user.id);

    setUsuarios(contatos);
  };

  function loginPressed() {
    navigation.navigate("Login");
  }

  useEffect(() => {
    getContatos();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.barraTop}>
          <TouchableOpacity onPress={loginPressed}><Image source={require('../../assets/icone-seta-esquerda.png')} style={styles.seta} /></TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.barraTop, {top: 10}]} onPress={ConversasAtivasPressed}>
        <Text style={styles.conversasAtivas}>Conversas Ativas</Text>
      </TouchableOpacity>

      <ScrollView>
        {usuarios.map((chat, index) => {
          return (
            <TouchableOpacity key={index} style={styles.contato} onPress={() => chatPressed(chat)}>
              <Text style={styles.texto}>{chat.nome}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#101215",
  },
  conversasAtivas:{
    height: 50,
    flex: 1,
    padding: 10,
    color: "#FF9E64",
    fontSize: 20
  },
  texto: {
    color: "#E91E63",
    fontSize: 16,
  },
  contato: {
    width: "100%",
    padding: 10,
    backgroundColor: "#161B22",
    // Shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 6
  },
  barraTop: {
    width: "100%",
    backgroundColor: "#161B22",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // Shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 6
  },
  seta: {
    width: 50,
    height: 50
  },
});
