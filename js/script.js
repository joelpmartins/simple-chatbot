document.addEventListener("DOMContentLoaded", () => {
  const campo_pergunta = document.getElementById("campo_pergunta");
  campo_pergunta.addEventListener("keydown", (key) => {
    if(key.code == "Enter"){
      let pergunta = campo_pergunta.value;
      campo_pergunta.value = "";
      enviar_mensagem(pergunta);
    }
  });
});

function enviar_mensagem(pergunta){
  let resposta;
  if(encontrar_resposta(perguntas, respostas, pergunta.toLowerCase().trim())){
    resposta = encontrar_resposta(perguntas, respostas, pergunta.toLowerCase().trim());
  }else{
    resposta = respostas_alternativas[Math.floor(Math.random() * respostas_alternativas.length)];
  }
  atualizar_chat(pergunta, resposta);
}

function encontrar_resposta(perguntas, respostas, pergunta){
  let resposta, res_status;
  for(let x=0; x<perguntas.length; x++){
    for(let y=0; y<perguntas[x].length; y++){
      if(perguntas[x][y].toLowerCase().trim() == pergunta){
        let respostas_arr = respostas[x];
        resposta = respostas_arr[Math.floor(Math.random() * respostas_arr.length)];
        res_status = true;
        break;
      }
    }
    if(res_status){
      break;
    }
  }
  return resposta;
}

function atualizar_chat(pergunta, resposta){
  const mensagens = document.getElementById("mensagens");

  let usuario_div = document.createElement("div");
  usuario_div.id = "usuario";
  usuario_div.className = "box box-left resposta";
  usuario_div.innerText = `${pergunta}`;  
  mensagens.appendChild(usuario_div);

  let bot_div = document.createElement("div");
  let bot_texto = document.createElement("span");
  bot_div.id = "bot";
  bot_div.className = "box box-right resposta";
  bot_texto.innerText = "Analisando...";
  bot_div.appendChild(bot_texto);
  mensagens.appendChild(bot_div);
  mensagens.scrollTop = mensagens.scrollHeight - mensagens.clientHeight;
  setTimeout(() => {
    bot_texto.innerText = `${resposta}`;
  }, 500);
}
