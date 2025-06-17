import readline from 'readline/promises';

const readlineOptions = { input: process.stdin, output: process.stdout };
const rl = readline.createInterface(readlineOptions);

const texto = await rl.question('Digite um texto: ');

rl.close();

const ehVazio = texto.toString().trim() === '';
const ehNumero = texto.toString().trim() !== '' && !isNaN(texto);
const ehAlfa = /^[A-Za-z]+$/.test(texto);
const ehAlfanumerico = /^[A-Za-z0-9]+$/.test(texto);
const ehUppercase = texto === texto.toString().toUpperCase() && !ehVazio;
const ehLowercase = texto === texto.toString().toLowerCase() && !ehVazio;
const ehCapitalizado = /^[A-Z][a-z]+$/.test(texto);
const tipo = typeof texto;

console.log(`O texto é vazio? ${ehVazio}`);
console.log(`O texto é número? ${ehNumero}`);
console.log(`O texto é alfabético? ${ehAlfa}`);
console.log(`O texto é alfanúmerico? ${ehAlfanumerico}`);
console.log(`O texto é UpperCase? ${ehUppercase}`);
console.log(`O texto é LowerCase? ${ehLowercase}`);
console.log(`O texto é capitalizado? ${ehCapitalizado}`);
console.log(`O texto é do tipo: ${tipo}`);