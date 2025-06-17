import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = await rl.question('Digite seu nome: ');

console.log(`Bem vindo ${nome}`);

rl.close();