/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const valores = ["2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K", "A"];
  const palos = ["♦", " ♥", "♠", "♣"];

  const randomValores = Math.floor(Math.random() * valores.length);
  const randomPalos = Math.floor(Math.random() * palos.length);

  const palo1 = document.getElementById("palo");
  palo1.innerText = palos[randomPalos];
  const numero = document.getElementById("num");
  numero.innerText = valores[randomValores];
  const palo2 = document.getElementById("palo2");
  palo2.innerText = palos[randomPalos];
};
