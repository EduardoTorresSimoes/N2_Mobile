import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const ip = 'http://192.168.15.5:8080'

export const gravarUsuario = (nome, email, telefone, senha) => {
    const item = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "senha": senha
    }
    console.log(item);
    axios
        .post(`${ip}/user/`, item)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    
}

    const saveUserData = async (data) => {
        await AsyncStorage.setItem("usuario", JSON.stringify(data)).catch((err) => {
        throw err;
        });
    };


export const logarUsuario = async (telefone, senha) => {
    try {
        const { data: response } = await axios.get(`${ip}/user/${telefone}/${senha}`)
        console.log(response)

        await saveUserData(response);

        return response
    }catch (err){
        console.log(err)
    }
}

export const Hash = async (id) => {
    try {
        const { data:response } = await axios.get(`${ip}/user/${id}`)
        console.log(response)
        return response
    }catch(err){
        console.log(err)
    }
}