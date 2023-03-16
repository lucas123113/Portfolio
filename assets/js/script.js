class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
const saida = document.querySelector(".web");
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

const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item")

class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }
  updateGallery(){
    this.carouselArray.forEach(el =>{
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });
    this.carouselArray.slice(0, 5).forEach((el, i) =>{
      el.classList.add(`gallery-item-${i+1}`);
    })
  }
  setCurrentState(direction){
    if(direction.className == "gallery-controls-previous"){
      this.carouselArray.unshift(this.carouselArray.pop());
    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }
  setControls(){
    this.carouselControls.forEach(control =>{
      galleryControlsContainer.appendChild(document.createElement("button")).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control
    })
  }
  useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control =>{
      control.addEventListener("click", e =>{
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();

function show(element1Id, element2Id) {
  const element1 = document.getElementById(element1Id);
  const element2 = document.getElementById(element2Id);

  this.addEventListener("mouseover", function() {
    element2.style.display = "block";
    element1.style.display = "none";
  });

  this.addEventListener("mouseout", function() {
    element2.style.display = "none";
    element1.style.display = "block";
  });
}
function show2(clickedElement, className, targetElement) {
  const elements = document.querySelectorAll(`.${className}`);
  
  elements.forEach(element => {
    element.classList.remove(className);
  });
  
  const target = document.querySelector(targetElement);
  target.classList.add(className);
}
