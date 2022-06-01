import {Cliente} from "./cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678989);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 78945612323);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78965432174, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEestaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEestaLogado);

