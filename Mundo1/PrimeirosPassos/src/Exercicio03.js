import readline from 'readline/promises';

const readlineOptions = { input: process.stdin, output: process.stdout };

const rl = readline.createInterface(readlineOptions);

const num1 = await rl.question('Digite um número: ');
const num2 = await rl.question('Digite outro número: ');

const soma = parseFloat(num1) + parseFloat(num2);

console.log(`${num1} + ${num2} = ${soma}`);
rl.close();