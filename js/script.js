// <!-- START PART TWO HOME -->
const cards = document.getElementsByClassName("cards") // pega os cards do html
const cardsArray = Array.from(cards) // transforma em uma list [card1, card2, card3]


cardsArray.forEach(element => {
    //pega os cards na lista um de cada vez

    //adiciona a classe card__active quando coloca mouse em cima do card
    element.addEventListener("mouseover", function () {
        element.classList.add("cards__active")
    })

    //remove a classe card__active quando remove o mouse de cima do card
    element.addEventListener("mouseout", function () {
        element.classList.remove("cards__active")
    })
})
 // <!-- END PART TWO HOME -->

// <!-- START PART THREE HOME -->
let slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    arrowKeys: true,
    controlsContainer: '.arrow__navegation--banner',
    nav: false
  });
// <!-- END PART THREE HOME -->

let slider_card = tns({
    container: '.my-slider-cards',
    items: 1,
    slideBy: 'page',
    arrowKeys: true,
    controlsContainer: '.arrow__navegation',
    nav: false,
  });