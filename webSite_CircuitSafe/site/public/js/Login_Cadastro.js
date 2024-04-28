
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

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: usuario,
      senhaServer: senha,
    }),
  }).then(function (resposta) {
      if (resposta.ok) {
        console.log(resposta);
        alert("chegamos!")

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));  
            sessionStorage.EMAIL_USUARIO = json[0].email;
            sessionStorage.NOME_USUARIO = json[0].nome_usuario;
            sessionStorage.ID_USUARIO = json[0].id_usuario;
            sessionStorage.ID_EMPRESA = json[0].empresaId;
            sessionStorage.NIVEL_USUARIO = json[0].nivel;

            // Redireciona para a dashboard
            window.location.href = "./dashboard/index.html";
        });
      } else {
        console.log('Erro na autenticação');
      }
  }).catch(function (erro) {
      console.log('Erro na requisição: ' + erro.message);
  });
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

  function sumirMensagem() {
    cardErro.style.display = "none";
  }