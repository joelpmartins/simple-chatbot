let palavras = [];
let campo_pergunta = document.getElementById("campo_pergunta");
let sugestao = document.getElementById("sugestao");

palavras.sort();

document.addEventListener("DOMContentLoaded", () => {
  for(let x=0; x<perguntas.length; x++){
    for(let y=0; y<perguntas[x].length; y++){
      palavras.push(perguntas[x][y]);
    }
  }
});
  
campo_pergunta.addEventListener("input", (e) => {
  limpar_sugestao();
  let regex = new RegExp("^" + campo_pergunta.value, "i");
  for(let i in palavras){
    if(regex.test(palavras[i]) && campo_pergunta.value != ""){
      palavras[i] = encontrar_sugestao(palavras[i]);
      sugestao.innerHTML = palavras[i];
      break;
    }
  }
});
  
campo_pergunta.addEventListener("keydown", (key) => {
  if(key.code == "Enter" && sugestao.innerText != ""){
    key.preventDefault();
    campo_pergunta.value = sugestao.innerText;
    limpar_sugestao();
  }
});

const encontrar_sugestao = (palavra) => {
  let pergunta = campo_pergunta.value;
  palavra = palavra.split("");
  for(let i in pergunta){
    if(pergunta[i] == palavra[i]){
      continue;
    }else if(pergunta[i].toUpperCase() == palavra[i]){
      palavra.splice(i, 1, palavra[i].toLowerCase());
    }else{
      palavra.splice(i, 1, palavra[i].toUpperCase());
    }
  }
  return palavra.join("");
};

const limpar_sugestao = () => {
  sugestao.innerHTML = "";
};