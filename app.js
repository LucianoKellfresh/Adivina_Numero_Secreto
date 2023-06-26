const readlineSync = require('readline-sync');
const {generarNumeroAleatorio,verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
  return readlineSync.question('Ingresa un numero : ')
}

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio(); 
  let numeroAdivinado = 0;


  console.log("¡Bienvenido a adivina el numero secreto!");
  console.log("Intenta adivinar el numero del 1 al 100./n");

  while(numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = parseInt(obtenerNumeroUsuario());
    verificarAdivinanza(numeroSecreto,numeroAdivinado);
  };
}


juegoAdivinanza();