import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import "./styles/warning.css";
import fraseTxt from "./files/frase.txt";
import descricao from "./files/descricao.json";

const title = new Title();

title.create("Primeira página");

const image = new Image();

image.inserImage();

const button = new Button();

button.create();

const obj = { a: 1, b: 2, c: 3 };

let { a, b, ...teste } = obj;
console.log(a, b, teste);

const body = document.querySelector("body");
body.innerHTML += warning;

const frase = fraseTxt;
console.log(frase);
console.log(fraseTxt.toUpperCase());

const pessoa = descricao;
console.log(pessoa);
