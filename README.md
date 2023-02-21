# Preview
[<img src="https://user-images.githubusercontent.com/86698896/212542292-607475c0-3834-46e9-bf32-b95a4557c92e.png"/>](https://www.youtube.com/watch?v=Uxb8cftssbc)

# Como funciona?

O chatbot funciona de maneira simples, no arquivo *frases.js* encontramos 3 variáveis responsáveis pelo funcionamento do bot:

`perguntas:` armazena todas perguntas que o usuário poderá fazer.
</br>
`respostas:` armazena todas as respostas possíveis pelo bot.
</br>
`respostas_alternativas:` armazena as respostas alternativas caso não for encontrado outra resposta.

```
const perguntas = [
    ["Olá"],
    ["Tudo bem?", "Tudo certo?"],
    ["Preciso de ajuda", "Tenho uma dúvida", "Poderia me ajudar?"]
]

const respostas = [
    ["Olá", "Olá, você precisa de ajuda?"],
    ["Sim, como você está?"],
    ["Como posso ajudar?", "Qual sua dúvida?"]
]

const respostas_alternativas = [
    ["Não encontrei nenhuma resposta, tente novamente..."],
    ["Não entendi, tente novamente..."]
]
```
