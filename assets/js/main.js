/*Dato un array di oggetti letterali con:

url dell’immagine
titolo
descrizione

Creare un carosello come nella foto allegata.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è 
la prima e l'utente clicca la freccia verso destra, la miniatura che deve 
attivarsi sarà l'ultima e viceversa per l'ultima miniatura se
l'utente clicca la freccia verso sinistra.
 
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) 
ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo 
di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

const images = [
  {
    image: "/assets/img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "/assets/img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "/assets/img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "/assets/img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "/assets/img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

/*Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali
 per popolare dinamicamente il carosello.*/

const sliderImagesElement = document.querySelector("slider > .images");
const prevButtonElement = document.querySelector(".prev");
const nextButtonElement = document.querySelector(".next");

// faccio un cilo for per poi passarlo a map e filter

for (let i = 0; i < images.length; i++) {
  const thisImageUrl = images[i];
  const imgMarkup = `<img src="${thisImageUrl}" alt="" class="img-fluid ${
    i === activeImage ? "active" : ""
  }">`;
  console.log(imgMarkup);
  sliderImagesElement.insertAdjacentHTML("beforeend", imgMarkup);
}

//seleziono tutte le immagini

const sliderImageElement = document.querySelectorAll(".slider > .images > img");
// console.log(imageElementList);

// aggiungo even Listener per il bottone

prevButtonElement.addEventListener("click", function () {
  console.log("prev");

  const thisImage = imageElementsList[activeImage];
  console.log(thisImage);

  thisImage.classList.remove("active");

  if (activeImage === 0) {
    activeImage = imageElementsList.lenght - 1;
  } else {
    activeImage--;
  }
});
