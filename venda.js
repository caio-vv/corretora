const prompt = require("prompt-sync")();

const corretor = require("./corretor.js");
const cliente = require("./cliente.js");
const imovel = require("./imovel.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
 

  let id_corretor = 0
  if(corretor.index()) {
      id_corretor = parseInt(prompt("ID do corretor: "));
  } else {
      console.log("Cadastre uma corretora para inserir uma venda");
  }

  let id_cliente = 0
  if(cliente.index()) {
    id_cliente = parseInt(prompt("ID do cliente: "));
} else {
    console.log("Cadastre um cliente para inserir uma venda");
}

let id_imovel = 0
  if(imovel.index()) {
    id_imovel = parseInt(prompt("ID do imovel: "));
} else {
    console.log("Cadastre um imovel para inserir uma venda");
}
    const corretorAUX = corretor.show(id_corretor)
    const imovelAUX = imovel.show(id_imovel)
  if (
    numero != "" && rua != "" && bairro != "" &&
    corretorAUX.id_corretora == imovelAUX.id_corretora &&
    corretorAUX &&
    imovelAUX &&
    cliente.show(id_cliente)
  ) {
    return {
      id,
      id_corretor,
      id_cliente,
      id_imovel,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
    if(index()) {
        const id = parseInt(prompt("ID: "));

        const indice = db.findIndex(el => el.id == id);

        if(indice != -1) {
            db.splice(indice, 1);
            console.log("Registro excluído com sucesso");
        } else {
            console.log("Registro não encontrado")
        }
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}