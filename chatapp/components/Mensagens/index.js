import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";

export const Mensagens = ({ route }) => {
    
    useEffect(() => {
        usuario = route.params
        salvarUsuario(usuario)
        if(usuario){
            setNome(usuario.nome)
        }
    })

    return (
        <View style={styles.container}>
            <Text>Em manutenção...</Text>
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
  }
})