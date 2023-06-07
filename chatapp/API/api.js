import axios from "axios";

const ip = 'http://192.168.0.139:8080'

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

export const logarUsuario = async (nome, senha) => {
    try {
        const { data: response } = await axios.get(`${ip}/user/${nome}/${senha}`)
        console.log(response)
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