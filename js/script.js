const saida = document.querySelector(".container-area");
let btnVermais = document.querySelector(".btn-vermais");
const escondido = document.querySelector(".card-escondido")
function digitacao (texto, contador){

    if(contador < texto.length){

        setTimeout(() => {
          saida.textContent += texto.charAt(contador);
          contador++;
          digitacao(texto, contador);  
        }, 90);
    }
}

digitacao("Desenvolvedor Web", 0);

let hidden = false;

function toggleElements() {
  if (hidden) {
    document.getElementById("project-4").style.display = "none";
    document.getElementById("project-5").style.display = "none";
    document.getElementById("project-6").style.display = "none";
    hidden = false;
    document.getElementById("btn-vermais").innerHTML = "Ver mais";
  } else {
    document.getElementById("project-4").style.display = "block";
    document.getElementById("project-5").style.display = "block";
    document.getElementById("project-6").style.display = "block";
    hidden = true;
    document.getElementById("btn-vermais").innerHTML = "Ver menos";
  }
}

document.getElementById("btn-vermais").addEventListener("click", toggleElements);

let elementoA = document.getElementById("estacio-icon");
let elementoB = document.getElementById("estacio");
mostrarElemento(elementoA, elementoB);

function mostrarElemento(elementoA, elementoB) {
  elementoA.addEventListener("mouseenter", function() {
    elementoB.style.opacity = "0";
    elementoB.style.display = "block";
    setTimeout(function() {
      elementoB.style.opacity = "1";
      elementoB.style.transition = "opacity 400ms ease";
    }, 10);
  });
  elementoA.addEventListener("mouseleave", function() {
    elementoB.style.opacity = "1";
    elementoB.style.transition = "opacity 100ms ease";
    setTimeout(function() {
      elementoB.style.opacity = "0";
      setTimeout(function() {
        elementoB.style.display = "none";
      }, 500);
    }, 10);
  });
}

let elementob = document.getElementById("samurai-icon");
let elementob2 = document.getElementById("samurai");
mostrarElemento(elementob, elementob2);

function mostrarElemento(elementob, elementob2) {
  elementob.addEventListener("mouseenter", function() {
    elementob2.style.opacity = "0";
    elementob2.style.display = "block";
    setTimeout(function() {
      elementob2.style.opacity = "1";
      elementob2.style.transition = "opacity 400ms ease";
    }, 10);
  });
  elementob.addEventListener("mouseleave", function() {
    elementob2.style.opacity = "1";
    elementob2.style.transition = "opacity 100ms ease";
    setTimeout(function() {
      elementob2.style.opacity = "0";
      setTimeout(function() {
        elementob2.style.display = "none";
      }, 500);
    }, 10);
  });
}
let elementoc = document.getElementById("bradesco-icon");
let elementoc2 = document.getElementById("bradesco");
mostrarElemento(elementoc, elementoc2);

function mostrarElemento(elementoc, elementoc2) {
  elementoc.addEventListener("mouseenter", function() {
    elementoc2.style.opacity = "0";
    elementoc2.style.display = "block";
    setTimeout(function() {
      elementoc2.style.opacity = "1";
      elementoc2.style.transition = "opacity 400ms ease";
    }, 10);
  });
  elementoc.addEventListener("mouseleave", function() {
    elementoc2.style.opacity = "1";
    elementoc2.style.transition = "opacity 100ms ease";
    setTimeout(function() {
      elementoc2.style.opacity = "0";
      setTimeout(function() {
        elementoc2.style.display = "none";
      }, 500);
    }, 10);
  });
}
function mostrarElemento(icone, texto, coment) {
  icone.addEventListener("mouseover", function() {
    texto.style.display = "block";
    coment.style.display = "none";
  });

  icone.addEventListener("mouseout", function() {
    texto.style.display = "none";
    coment.style.display = "block";
  });
}

let icone1 = document.getElementById("icon-html");
let texto1 = document.getElementById("html");
let coment1 = document.getElementById("coment");

mostrarElemento(icone1, texto1, coment1);

let icone2 = document.getElementById("icon-css");
let texto2 = document.getElementById("css");
let coment2 = document.getElementById("coment");

mostrarElemento(icone2, texto2, coment2);

let icone3 = document.getElementById("icon-js");
let texto3 = document.getElementById("js");
let coment3 = document.getElementById("coment");

mostrarElemento(icone3, texto3, coment3);

let icone4 = document.getElementById("icon-react");
let texto4 = document.getElementById("react");
let coment4 = document.getElementById("coment");

mostrarElemento(icone4, texto4, coment4);

let icone5 = document.getElementById("icon-sass");
let texto5 = document.getElementById("sass");
let coment5 = document.getElementById("coment");

mostrarElemento(icone5, texto5, coment5);

let icone6 = document.getElementById("icon-git");
let texto6 = document.getElementById("git");
let coment6 = document.getElementById("coment");

mostrarElemento(icone6, texto6, coment6);

let icone7 = document.getElementById("icon-github");
let texto7 = document.getElementById("github");
let coment7 = document.getElementById("coment");

mostrarElemento(icone7, texto7, coment7);

let icone8 = document.getElementById("icon-type");
let texto8 = document.getElementById("type");
let coment8 = document.getElementById("coment");

mostrarElemento(icone8, texto8, coment8);

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate"

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll () {
const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
target.forEach(function(element){
if((windowTop) > element.offsetTop){
  element.classList.add(animationClass)
} else {
  element.classList.remove(animationClass)
}
})
}
animeScroll();

if(target.length){
window.addEventListener("scroll", debounce(function(){
  animeScroll();
}, 50));
}


