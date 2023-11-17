"use.strict";

// variabili
const imagesList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const imagesContainer = document.querySelector(".items");
const thumbnailContainer = document.querySelector(".all");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;

//!ciclo per assegnaziojne immagini all' elemento HTML .items
for (let i = 0; i < imagesList.length; i++) {
  // creo l'elemento blocco immagine
  const item = document.createElement("div");
  item.classList.add("item");
  //se è la prima img inserisco anche la classe active per renderla visibile
  if (i === 0) {
    item.classList.add("active");
  }

  //creo l'elemento immagine e assegno src e alt
  const img = document.createElement("img");
  img.src = `./img/${imagesList[i]}`;
  img.alt = `Immagine ${i + 1}`;

  //inserisco le img in item
  item.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;

  //inserisco item nel mio contenitore di immagini
  imagesContainer.append(item);
}

//!ciclo per assegnaziojne immagini all' elemento HTML .all
for (let i = 0; i < imagesList.length; i++) {
  // creo l'elemento blocco immagine
  const item = document.createElement("div");

  //creo l'elemento immagine e assegno src e alt
  const img = document.createElement("img");

  if (i === 0) {
    img.classList.add("thumbnail-active");
  }

  img.src = `./img/${imagesList[i]}`;
  img.alt = `Immagine ${i + 1}`;

  //inserisco le img in item
  item.append(img);

  //inserisco item nel mio contenitore di immagini
  thumbnailContainer.append(item);
}

//inizializzo una variabile che raccoglie tutte le mie immagini .items (simile ad un array)
const images = document.querySelectorAll(".item");
//inizializzo una variabile che raccoglie tutte le mie immagini di .all
const imagesAll = document.querySelectorAll(".all img");

//! click su avanti
next.addEventListener(`click`, function () {
  if (counter < images.length - 1) {
    // rimuovo le classi active
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail
    counter++;
    // aggiungo le classi active al successivo
    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
  } else if (counter === Number(images.length) - 1) {
    //resetto il contatore immagini se è arrivato all' ultima (ciclo infinito di click)
    images[counter].classList.remove("active");
    imagesAll[counter].classList.remove("thumbnail-active");
    counter = 0;
    images[counter].classList.add("active");
    imagesAll[counter].classList.add("thumbnail-active");
  }
});

//! click su precedente
prev.addEventListener(`click`, function () {
  if (counter > 0) {
    // rimuovo le classi active
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail
    counter--;
    // aggiungo le classi active al successivo
    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
  } else if (counter === 0) {
    //riporto al massimo il contatore immagini se è arrivato alla prima(ciclo infinito di click)
    images[counter].classList.remove("active");
    imagesAll[counter].classList.remove("thumbnail-active");
    counter = images.length - 1;
    images[counter].classList.add("active");
    imagesAll[counter].classList.add("thumbnail-active");
  }
});

//! click su singola thumnail
imagesAll[0].addEventListener(`click`, function () {
  images[0].classList.add("active");
  imagesAll[0].classList.add("thumbnail-active");

  images[1].classList.remove("active");
  imagesAll[1].classList.remove("thumbnail-active");

  images[2].classList.remove("active");
  imagesAll[2].classList.remove("thumbnail-active");

  images[3].classList.remove("active");
  imagesAll[3].classList.remove("thumbnail-active");

  images[4].classList.remove("active");
  imagesAll[4].classList.remove("thumbnail-active");

  counter = 0;
});

imagesAll[1].addEventListener(`click`, function () {
  images[1].classList.add("active");
  imagesAll[1].classList.add("thumbnail-active");

  images[0].classList.remove("active");
  imagesAll[0].classList.remove("thumbnail-active");

  images[2].classList.remove("active");
  imagesAll[2].classList.remove("thumbnail-active");

  images[3].classList.remove("active");
  imagesAll[3].classList.remove("thumbnail-active");

  images[4].classList.remove("active");
  imagesAll[4].classList.remove("thumbnail-active");

  counter = 1;
});

imagesAll[2].addEventListener(`click`, function () {
  images[2].classList.add("active");
  imagesAll[2].classList.add("thumbnail-active");

  images[1].classList.remove("active");
  imagesAll[1].classList.remove("thumbnail-active");

  images[0].classList.remove("active");
  imagesAll[0].classList.remove("thumbnail-active");

  images[3].classList.remove("active");
  imagesAll[3].classList.remove("thumbnail-active");

  images[4].classList.remove("active");
  imagesAll[4].classList.remove("thumbnail-active");

  counter = 2;
});

imagesAll[3].addEventListener(`click`, function () {
  images[3].classList.add("active");
  imagesAll[3].classList.add("thumbnail-active");

  images[1].classList.remove("active");
  imagesAll[1].classList.remove("thumbnail-active");

  images[2].classList.remove("active");
  imagesAll[2].classList.remove("thumbnail-active");

  images[0].classList.remove("active");
  imagesAll[0].classList.remove("thumbnail-active");

  images[4].classList.remove("active");
  imagesAll[4].classList.remove("thumbnail-active");

  counter = 3;
});

imagesAll[4].addEventListener(`click`, function () {
  images[4].classList.add("active");
  imagesAll[4].classList.add("thumbnail-active");

  images[1].classList.remove("active");
  imagesAll[1].classList.remove("thumbnail-active");

  images[2].classList.remove("active");
  imagesAll[2].classList.remove("thumbnail-active");

  images[3].classList.remove("active");
  imagesAll[3].classList.remove("thumbnail-active");

  images[0].classList.remove("active");
  imagesAll[0].classList.remove("thumbnail-active");

  counter = 4;
});

/* ?CORREZIONE

! const path = 'img/';  salvo la path delle immagini, posso cambiarla da qui se serve

! rimuovo / cambio solo il valore di counter in base alle condizioni / aggiungo (rimuovere e aggiungere non si ripete, lo faccio sempre)
  next.addEventListener(`click`, function () {
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

      if (counter === Number(images.length) - 1) {
         counter = 0;
       } else {
           counter++;
        }

    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
});

  prev.addEventListener(`click`, function () {
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

      if (counter === 0) {
         counter = images.length - 1;
       } else {
           counter--;
        }

    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
});





*/
