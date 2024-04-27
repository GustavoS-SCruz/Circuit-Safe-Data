
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function logar(){
  var usuario = email_usuario_login.value;
  var senha = senha_usuario_login.value;

  if(usuario == "circuit_safe" || senha == "urubu100"){
    let params = new URLSearchParams();
    params.append('username', usuario);
    params.append('password', senha);

    window.location = "./dashboard/index.html?" + params.toString();
  } else {
    alert("Usuário ou senha inválidos!");
  }

}

function cadastrar() {
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var emailVar = email_usuario.value;
    var senhaVar = senha_input.value;
    var cpfVar = cpf_usuario.value;

    if (cpfVar == "" || emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        cpfServer: cpfVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Clique em 'login' para acessar o sistema.";

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }

  function listar() {
    fetch("/empresas/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((empresas) => {
          empresas.forEach((empresa) => {
            listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
          });
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }

fetch("/usuarios/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    emailServer: emailVar,
    senhaServer: senhaVar,
  }),
})
  .then(function (resposta) {
    if (resposta.ok) {
      return resposta.json();
    } else {
      throw "Houve um erro ao tentar realizar o login!";
    }
  })
  .then(function (dados) {
    console.log("Login realizado com sucesso!", dados);
  })
  .catch(function (erro) {
    console.log(`#ERRO: ${erro}`);
  });

  function sumirMensagem() {
    cardErro.style.display = "none";
  }