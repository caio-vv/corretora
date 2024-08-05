const prompt = require('prompt-sync')()

let residencias = []


const modelo = (id) => {
    const pegar_id_corretora = prompt("qual o ID da corretora: ")
    const bairro = prompt("qual bairro: ")
    const rua = prompt("qual rua")
    const numero = prompt("qual numero")

    if (bairro != "" && rua != "" && numero != ""){
       
        let residencia
        if (id != undefined){
        residencia = {
        id,
        bairro, 
        rua, 
        numero, 
        
        }
    } else {
        residencia = {
            id: pegar_id_corretora,
            bairro, 
            rua, 
            numero, 
            
            }
            
    }
    return residencia
    }
}
const adicionaResidencia = () => {
    const residencia = modelo()
    if (residencia != undefined){
        residencias.push(residencia)
    }
    console.log(residencias)
}
const removerResidencias = () => {
    listarResidencias()
    const pegarID = prompt("qual id voce deseja remover")

    residencias.forEach((residencia, indice) => {
        if (pegarID == residencia.id){
            const confrimarRemocao = prompt("deseja mesmo remover? s para sim ")
            if (confrimarRemocao == "s"){
                residencias.splice(indice, 1)
                console.log("residencia removida")
            }
        }
    });
}
function listarResidencias() {
  residencias.forEach((residencia) => {
    console.log(
      `ID: ${residencia.id}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
    );
    
  });
}
const atualizarResidencia = () =>{
    listarResidencias()
    const pegarID = prompt("qual id voce deseja atualizar")
    const novo = modelo(pegarID)
    residencias.forEach((residencia, indice) => {
        if (pegarID == residencia.id){
            residencias[indice] = novo
        }
    })
}
module.exports = {listarResidencias, adicionaResidencia, removerResidencias, atualizarResidencia};