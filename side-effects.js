const axios = require("axios");

const api = axios.create({
  baseURL: `https://api.github.com`,
});

function buscarUsuario(nomeUsuario) {
  api
    .get(`users/${nomeUsuario}`)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}

buscarUsuario("ViniciusAlexsander");
