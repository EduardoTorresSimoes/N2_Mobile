import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Main = () => {

  const navigation = useNavigation();

    function loginPressed() {
      navigation.navigate("Login");
    }

    function cadastroPressed() {
      navigation.navigate("Cadastro");
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>"Seu app Aqui"</Text>
      <Text style={styles.subtitulo}>Bem Vindo!</Text>
      <Image source={require('./icone-app.png')} style={styles.icone} />
      <TouchableOpacity onPress={loginPressed} style={styles.botao}>
        <Text style={styles.conteudoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cadastroPressed} style={[styles.botao, {top: 541}]}>
        <Text style={styles.conteudoBotao}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#101215",
  },
  titulo: {
    flex: 1,
    position: "absolute",
    left: Dimensions.get('window').width/5.3,
    top: 85,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 42,
    color: '#E91E63',
  },
  subtitulo: {
    flex: 1,
    position: "absolute",
    left: Dimensions.get('window').width/3,
    top: 134,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28,
    color: '#E91E63',
  },
  icone:{
    flex: 1,
    position: "absolute",
    width: 161,
    height: 161,
    left: Dimensions.get('window').width/3.5,
    top: 233,
    // Shadow:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 6,
  },
  botao: {
    position: 'absolute',
    width: 194,
    height: 65,
    left: Dimensions.get('window').width/4.5,
    top: 465,
    backgroundColor: '#161B22',
    justifyContent: 'center',
    alignItems: 'center', 
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
  conteudoBotao: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28,
    color: '#E91E63',
  }
});