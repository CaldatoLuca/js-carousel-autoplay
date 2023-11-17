# Carousel Autoplay

_HTML+css+js_

Creazione di una funzione di autoplay da applicare a un esercizio già svolto, [corousel](https://github.com/CaldatoLuca/js-array-carousel).

## Soluzione

1. Dividere in funzioni gli eventi prossima immagine e immagine precedente
2. Far avvenire tali eventi al click del bottone start e delle frecce
3. Far in modo che l' evento si ripeta con `setInterval(, )`
4. Cancellare l' evento se si va a premere sul pulsante di stop con `clearInterval();`

## Svolgimento

**### Dividere in funzioni gli eventi prossima immagine e immagine precedente**

```js
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
```

- inserisco in due funzioni separate le istruzioni per passare alla prossima o alla precedente immagin/thumbnail

**### Far avvenire tali eventi al click del bottone start e delle frecce**
**### Far in modo che l' evento si ripeta con `setInterval(, )`**

```js
let intervalNext;
let intervalPrev;

start.addEventListener("click", function () {
  intervalNext = setInterval(nextImage, 1000);
  clearInterval(intervalPrev);
});
next.addEventListener(`click`, function () {
  intervalNext = setInterval(nextImage, 1000);
  clearInterval(intervalPrev);
});

prev.addEventListener(`click`, function () {
  intervalPrev = setInterval(prevImage, 1000);
  clearInterval(intervalNext);
});
```

- al click sulle frecce parte il relativo evento a un intervallo di 1s (lo stesso click interrompe l' evento antagonista)

- al click su start parte lo stasso evento della freccia next

**### Cancellare l' evento se si va a premere sul pulsante di stop con `clearInterval();`**

```js
stop.addEventListener("click", function () {
  clearInterval(intervalNext);
  clearInterval(intervalPrev);
  clearInterval(y);
});
```

### Scroll iniziale al caricamento della pagina

```js
function startEvent() {
  let x;
  x = setInterval(nextImage, 1000);
  return x;
}

function buttons() {
  let y = startEvent();
  let intervalNext;
  let intervalPrev;

  //! eventListeners su bottoni e frecce
}
```

- creo una funzione startEvent che richiamo all' interno di buttons, in modo da poterla fermara al click sul bottone stop
- richiamo poi buttons nel mio codice principale avrò come risulato uno scroll al caricamento della pagina (causato da stertEvent)
