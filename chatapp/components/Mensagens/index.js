import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";

export const Mensagens = ({ route }) => {

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