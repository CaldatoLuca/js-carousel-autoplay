"use.strict";

/*
?------
!FUNZIONI
?------
*/

function nextImage() {
  images[counter].classList.remove("active"); //immagine principale
  imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

  if (counter === Number(images.length) - 1) {
    counter = 0;
  } else {
    counter++;
  }

  images[counter].classList.add("active"); //immagine principale
  imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
}

function prevImage() {
  images[counter].classList.remove("active"); //immagine principale
  imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

  if (counter === 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }

  images[counter].classList.add("active"); //immagine principale
  imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
}

/*
?------
!CODICE
?------
*/
// variabili
const imagesList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const imagesContainer = document.querySelector(".items");
const thumbnailContainer = document.querySelector(".all");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;
let x = setInterval(prevImage, 3000);

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

//! click su precedente
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

//! evento click sulle thumbnail
for (let i = 0; i < imagesAll.length; i++) {
  imagesAll[i].addEventListener("click", function () {
    for (let j = 0; j < imagesAll.length; j++) {
      if (j !== i) {
        imagesAll[j].classList.remove("active");
        imagesAll[j].classList.remove("thumbnail-active");
      }
    }
    imagesAll[i].classList.add("active");
    imagesAll[i].classList.add("thumbnail-active");
  });
}
