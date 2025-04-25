
# 🧮 The Unconventional Calculator

The Unconventional Calculator é um projeto simples de calculadora aritmética, desenvolvido com foco no aprendizado de **JavaScript Vanilla**, integrando manipulação de DOM, funções puras e separação de responsabilidades. Este projeto faz parte do meu portfólio como estudante de tecnologia, e representa uma etapa importante no entendimento dos fundamentos da linguagem.

---

## 📌 Objetivo do Projeto

Construir uma calculadora funcional que realiza operações básicas (`+`, `-`, `*`, `/`) e permite zerar os valores, aplicando os conceitos fundamentais de:

- Manipulação do DOM com JavaScript puro
- Organização de código em arquivos modulares (`HTML`, `CSS`, `JS`)
- Criação de funções reutilizáveis e manutenção de estado
- Adição de logs para cada operação realizada

---

## 🚀 Funcionalidades

- Entrada de números via campo de input
- Botões para cada operação matemática
- Reset de valores com botão "C"
- Exibição dinâmica do cálculo e resultado
- Registro no console de cada operação feita (log de histórico interno)

---

## 🧠 Principais aprendizados no `app.js`

> O foco principal deste projeto foi o JavaScript, mais especificamente o arquivo `app.js`. Abaixo, destaco os pontos-chave que aprendi e apliquei:

### 🔸 Estado e valores

```js
let currentValue = 0;
let logEntries = [];
```

- Um valor principal (`currentValue`) é mantido globalmente.
- Um array de logs armazena os dados de cada operação para inspeção no console.

### 🔸 Abstração de entrada

```js
function usrNumber() {
    return parseInt(userInput.value);
}
```

- Criação de uma função para recuperar e converter a entrada do usuário.

### 🔸 Funções puras por operação

```js
function add() { ... }
function subtract() { ... }
function multiply() { ... }
function divide() { ... }
```

- Cada operação é encapsulada numa função específica, mantendo legibilidade e separação de responsabilidades.

### 🔸 Saída e log

```js
function outPutLog(operator, resultBeforeCalc, calcNumber) { ... }
function writeLog(operationIdentifier, prevResult, operationNumber, newResult) { ... }
```

- Saída visual e registro no console foram divididos em funções reutilizáveis.
- Os logs ajudam a acompanhar o fluxo de execução e facilitam o debug.

### 🔸 Integração com o DOM

```js
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
// etc.
```

- Eventos são registrados para cada botão, conectando as ações do usuário à lógica implementada.

---

## 🧩 Estrutura do Projeto

```bash
📁 assets
 ┣ 📂 styles
 ┃ ┗ 📄 app.css      # Estilização geral da interface
 ┣ 📂 scripts
 ┃ ┣ 📄 vendor.js    # Seleção e controle de elementos do DOM
 ┃ ┗ 📄 app.js       # Lógica da calculadora (foco principal)
📄 index.html         # Estrutura HTML da aplicação
```

---

## 🖼️ Interface

- Design simples, limpo e responsivo
- Estilo moderno com foco na experiência de aprendizado
- Utilização de `Roboto` via Google Fonts

---

## 📚 Tecnologias Usadas

- HTML5
- CSS3
- JavaScript ES6 (foco principal)

---

## 📈 Futuras Melhorias (to-do)

- Adicionar histórico visível das operações realizadas
- Implementar tratamento de erros (divisão por zero, valores inválidos)
- Melhorar acessibilidade e usabilidade
- Internacionalização da interface

---

## 👨‍💻 Autor

**Neto**  
Estudante de Sistemas para Internet | Foco em Backend  
📘 Em formação constante por meio de cursos e projetos práticos  
🔗 [Perfil GitHub](https://github.com/seu-usuario-aqui)

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para usar, estudar e adaptar!
