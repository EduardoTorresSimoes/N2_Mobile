import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ip = "http://192.168.15.5:8080";
//const ip = "http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com";

export const gravarUsuario = (nome, email, telefone, senha) => {
  const item = {
    nome: nome,
    email: email,
    telefone: telefone,
    senha: senha,
  };
  console.log(item);
  axios
    .post(`${ip}/user/`, item)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveUserData = async (data) => {
  await AsyncStorage.setItem("usuario", JSON.stringify(data)).catch((err) => {
    throw err;
  });
};

export const logarUsuario = async (telefone, senha) => {
  try {
    const { data: response } = await axios.get(
      `${ip}/user/${telefone}/${senha}`
    );
    console.log(response);

    await saveUserData(response);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const Hash = async (id) => {
  try {
    const { data: response } = await axios.get(`${ip}/user/${id}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// --- DOIDERAS --- //

export const acharUsuarios = async (login) => {
  try {
    const usuarios = await axios
      .get(`${ip}/message/buscarUsuarios/${login}`)
      .then(({ data }) => data);
    return usuarios;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const acharUsuariosConversa = async (id) => {
  try {
    const usuarios = await axios
      .get(`${ip}/message/buscarUsuariosComConversa/${id}`)
      .then(({ data }) => data);

    return usuarios;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const acharConversa = async (idUsuario, idContato) => {
  try {
    const mensagens = await axios
      .get(
        `${ip}/message/buscarMensagensComUmUsuario/${idUsuario}/${idContato}`
      )
      .then(({ data }) => data);
    return mensagens;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const enviarMensagem = (texto, idUsuario, idContato) => {
  const item = {
    idFrom: idUsuario,
    idTo: idContato,
    mensagem: texto,
  };
  axios
    .post(`${ip}/message/enviarMensagem`, item)
    .then((res) => {})
    .catch((err) => console.log(err));
};
