import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import * as api from "../../API/api";

export const Chat = ({ route, navigation }) => {
  const { user } = route.params || {};
  const [receptor, setReceptor] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const getMen = async () => {
    const meuUser = await AsyncStorage.getItem("usuario").then((data) =>
      JSON.parse(data)
    );

    const men = await api.acharConversa(meuUser.id, user.id);
    men.sort((a, b) => a.dataHora.localeCompare(b.dataHora));

    setReceptor(men);
  };

  useEffect(() => {
    if (user) {
      getMen();

      const interval = setInterval(() => {
        getMen();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [user]);

  const handleAddMessageLocally = async (text) => {
    const meuUser = await AsyncStorage.getItem("usuario").then((data) =>
      JSON.parse(data)
    );

    const newMessage = {
      from: {
        ...meuUser,
      },
      to: {
        ...user,
      },
      mensagem: text,
      dataHora: new Date(),
    };

    delete newMessage.from.avatar;
    delete newMessage.to.avatar;

    receptor.push(newMessage);
  };

  const sendMensagem = async () => {
    const meuUser = await AsyncStorage.getItem("usuario").then((data) =>
      JSON.parse(data)
    );

    handleAddMessageLocally(mensagem);

    await api.enviarMensagem(mensagem, meuUser.id, user.id);
    setMensagem("");
  };

  function contatosPressed() {
    navigation.navigate("Contatos");
  }

  return (
    <View style={styles.container}>
        <View style={styles.barraTop}>
            <TouchableOpacity  onPress={contatosPressed}><Image source={require('../../assets/icone-seta-esquerda.png')} style={styles.seta} /></TouchableOpacity>
        </View>

      <ScrollView>
        {receptor.map((pendejo, index) => {
          return (
            <View
              key={index}
              style={
                pendejo.from.id == user.id
                  ? styles.mensagemRerecebida
                  : styles.mensagemEnenviada
              }
            >
              <View
                style={
                  pendejo.from.id == user.id ? styles.recebida : styles.enviada
                }
              >
                <Text style={styles.texto}>{pendejo.mensagem}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />
        <TouchableOpacity onPress={sendMensagem}>
          <Text style={styles.textoIput}>{">"}</Text>
        </TouchableOpacity>
      </View>

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
  mensagemRerecebida: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10
  },
  mensagemEnenviada: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10
  },
  enviada: {
    padding: 10,
    gap: 10,
    backgroundColor: "#810731",

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
  recebida: {
    padding: 10,
    gap: 10,
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
  texto: {
    color: "white",
  },
  input: {
    height: 40,
    flex: 1,
    padding: 10,
    color: "white",
    fontSize: 20,
  },
  inputContainer: {
    bottom: 10,
    left: 10,
    right: 5,
    width: "95%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#161B22',
    // Shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    borderRadius: 30,
    elevation: 6
  },

  textoIput: {
    color: "white",
    fontSize: 49,
  },
  seta: {
    width: 50,
    height: 50
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
  }
});
