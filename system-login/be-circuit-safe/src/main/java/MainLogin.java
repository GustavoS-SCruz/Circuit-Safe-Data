import java.util.Scanner;

public class MainLogin {
    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        LoginMetodos login = new LoginMetodos();


        String nomeUsuario;
        String senha;

        System.out.println("Digite seu nome de usuário:");
        nomeUsuario = leitor.nextLine();

        System.out.println("Digite sua senha:");
        senha = leitor.nextLine();

        login.realizarLogin(nomeUsuario, senha);


    }
}
