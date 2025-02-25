import "bootstrap";
// import { formatWithCursor } from "prettier";
import "./style.css";

// Especifico que las funciones se carguen al entrar en la página
window.onload = function() {
  // Establezco cuatro arrays con varios elementos, a partir de los cuales va a generar un aleatorio para crear los dominios web
  let firstPart = [
    "the",
    "our",
    "your",
    "their",
    "one",
    "some",
    "that",
    "this",
    "many"
  ];

  let secondPart = [
    "bitter",
    "glutenfree",
    "nontransgenic",
    "8bit",
    "tattooed",
    "sustainable",
    "nextlevel",
    "authentic",
    "raw",
    "umami",
    "nongmo",
    "activated",
    "tumeric",
    "vegan"
  ];

  let thirdPart = [
    "guru",
    "skateboard",
    "shaman",
    "vinegar",
    "hoodie",
    "ethical",
    "foodtruck",
    "helvetica",
    "succulents",
    "biodiesel",
    "toast",
    "distillery",
    "chicharrones"
  ];

  let fourthPart = [
    ".com",
    ".barefoot",
    ".beer",
    ".ads",
    ".adult",
    ".bargains",
    ".boots",
    ".chat",
    ".cooking",
    ".dating",
    ".dentist"
  ];

  // Creo cuatro arrays vacios que van a recibir los elementos aleatorios para generar los dominios

  let pronoun = [];
  let adj = [];
  let noun = [];
  let domains = [];

  // Con esta funcion relleno aleatoriamente los arrays a partir de toda la información que tengo de partida

  function getRandom(array, newArray) {
    let randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
  }

  for (let i = 0; i < 2; i++) {
    getRandom(firstPart, pronoun);
    getRandom(secondPart, adj);
    getRandom(thirdPart, noun);
    getRandom(fourthPart, domains);
  }

  // Con esta funcion genero todas las combinaciones posibles entre los elementos del array

  function getName() {
    let resultado = [];

    for (let i = 0; i < pronoun.length; i++) {
      let who = pronoun[i];

      for (let j = 0; j < adj.length; j++) {
        let how = adj[j];

        for (let k = 0; k < noun.length; k++) {
          let what = noun[k];

          for (let l = 0; l < domains.length; l++) {
            let dom = domains[l];
            resultado.push(who + how + what + dom);
          }
        }
      }
    }

    return resultado;
  }

  let resultado = getName();

  // A partir de aquí divido en dos el array resultante, para representarlo en dos columnas en la web.

  const half = Math.ceil(resultado.length / 2);

  var firstHalf = resultado.slice(0, half);
  var secondHalf = resultado.slice(half, resultado.length);

  document.querySelector("#hipsterName").innerHTML = firstHalf.join("<br>");
  document.querySelector("#hipsterName2").innerHTML = secondHalf.join("<br>");
};
