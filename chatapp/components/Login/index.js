import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
    const navigation = useNavigation();

    function mainPressed() {
      navigation.navigate("Main");
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={mainPressed}><Image source={require('./icone-seta-esquerda.png')} style={styles.seta} /></TouchableOpacity>
            <Text style={styles.titulo}>Login</Text>
            <View>
                <Text style={styles.campo}>Usuário</Text>
                <Image source={require('./icone-usuario.png')} style={[styles.icone]}></Image>
                <TextInput style={styles.conteudo}></TextInput>
                <View style={styles.linha}></View>
            
                <Text style={[styles.campo, {top: 327}]}>Senha</Text>
                <Image source={require('./icone-senha.png')} style={[styles.icone, {top: 354, width: 17, height: 18, left: Dimensions.get('window').width/5}]}></Image>
                <TextInput style={[styles.conteudo, {top: 355}]} secureTextEntry={true}></TextInput>
                <View style={[styles.linha, {top: 383}]}></View>
            </View>
            <TouchableOpacity style={[styles.botao, {top: 541}]}>
                <Text style={styles.conteudoBotao}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#101215",
  },
  seta: {
    flex: 1,
    position: 'absolute',
    width: 72,
    height: 72,
    top: 6,
  },
  titulo: {
      flex: 1,
      position: "absolute",
      left: Dimensions.get('window').width/3,
      top: 79,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 48,
      lineHeight: 56,
      color: '#E91E63',
    },
    campo: {
      flex: 1,
      position: 'absolute',
      width: 82,
      height: 28,
      left: Dimensions.get('window').width/5,
      top: 254,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 24,
      lineHeight: 28,
      color: '#E91E63',
    },
    conteudo: {
      flex: 1,
      position: 'absolute',
      width: 190,
      height: 23,
      left: Dimensions.get('window').width/3.8,
      top: 284,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 23,
      color: '#FF9E64',
    },
    icone: {
      flex: 1,
      position: 'absolute',
      width: 28,
      height: 28,
      left: Dimensions.get('window').width/5.4,
      top: 279,
    },
    linha: {
      flex: 1,
      position: "absolute",
      width: 216,
      height: 1,
      left: Dimensions.get('window').width/5,
      top: 312,
      borderWidth: 1,
      borderColor: '#E91E63',
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
})