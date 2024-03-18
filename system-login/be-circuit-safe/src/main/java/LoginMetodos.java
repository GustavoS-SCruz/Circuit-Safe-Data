
public class LoginMetodos {

    Usuario usuario01 = new Usuario("Circuit Safe", "urubu100");

    Boolean realizarLogin(String nomeDeUsuario, String senha) {


        if (nomeDeUsuario.toUpperCase().equals(usuario01.nomeDeUsuario.toUpperCase())
                && senha.equals(usuario01.senha)) {
            System.out.println("Bem vindo, %s!".formatted(nomeDeUsuario));
            return true;
        } else {
            System.out.println("Seu email ou senha está errado :c");
            return false;
        }

    }
}
