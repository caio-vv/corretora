const prompt = require('prompt-sync')()

let corretoras = []
let ultimoIDcorretora = 1

const modeloCORRETORA = (id) => {
    
    const nome = prompt("qual nome da corretora: ")
    

    if (nome != ""){
       
        let corretora
        if (id != undefined){
        corretora = {
            nome,
        id,
        
        }
    } else {
        corretora = {
            id: ultimoIDcorretora,
            nome,
            
            }
            ultimoIDcorretora++
    }
    return corretora
    }
}
const adicionacorretora = () => {
    const corretora = modeloCORRETORA()
    if (corretora != undefined){
        corretoras.push(corretora)
    }
    console.log(corretoras)
}
const removercorretoras = () => {
    listarcorretoras()
    const pegarID = prompt("qual id voce deseja remover")

    corretoras.forEach((corretora, indice) => {
        if (pegarID == corretora.id){
            const confrimarRemocao = prompt("deseja mesmo remover? s para sim ")
            if (confrimarRemocao == "s"){
                corretoras.splice(indice, 1)
                console.log("corretora removida")
            }
        }
    });
}
function listarcorretoras() {
  corretoras.forEach((corretora) => {
    console.log(
      `ID: ${corretora.id},Nome: ${corretora.nome},`
    );
    
  });
}
const atualizarcorretora = () =>{
    listarcorretoras()
    const pegarID = prompt("qual id voce deseja atualizar")
    const novo = modelo(pegarID)
    corretoras.forEach((corretora, indice) => {
        if (pegarID == corretora.id){
            corretoras[indice] = novo
        }
    })
}

module.exports = {listarcorretoras, adicionacorretora, removercorretoras, atualizarcorretora};