const generarNumeroAleatorio = () =>{
  return Math.floor(Math.random() * 100) + 1;
};




const verificarAdivinanza = (numeroSecreto , numeroAdivinado) => {
  if (numeroAdivinado === numeroSecreto) {
    console.log("¡Felicidades! ¡Adivinaste el numero secreto!");   
  }else if (numeroAdivinado > numeroSecreto) {
    console.log("El numero secreto es menor. ¡Sigue intentando!");
  }else if (numeroAdivinado < numeroSecreto) {
    console.log("El numero secreto es mayor. ¡Sigue intentando!");
  }

};

module.exports = {
  generarNumeroAleatorio,verificarAdivinanza
};
