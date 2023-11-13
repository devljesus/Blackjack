/**
 *  2C = Two of clubs 
 *  Español: Dos de tréboles
 * 
 *  2D = Two of Diaminds 
 *  Español: Dos de Diamantes
 * 
 *  2H =Two of Hearts
 *  Español: Dos de Corazones
 * 
 *  2S =Two of swords
 *  Español: Dos de Esadas
 */
// Inicializaciones

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'j', 'Q', 'K'];

// Inicializacion de los puntajes

let puntosJugador = 0;
let puntosComputadora = 0;

//Referenfias del html

const btnpediCarta = document.querySelector('#btnpedir-carta');
const mostraMarcador = document.querySelectorAll('small');
const divMostrarCartas = document.querySelector('#jugador-carta-1');
const JugadorComputadora = document.querySelector('#jugador-computadora')
const  detenerPartida = document.querySelector('#btndetener-partida')
// Esta funcion crea una nueva barja

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {

        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

crearDeck()

// Con esta funcion me permite tomar una carta 

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'no hay carta en el deck';
    }
    let carta = deck.pop();
    return carta;
};

//valor de la carta

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1)

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    /**let puntos = 0;
    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;

    } else {
        puntos = valor * 1;

    }
    console.log(puntos)
    return puntos
   */

}
// Turno de la computadora  
const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);

        //logica de mostrar puntaje del marcador

        mostraMarcador[1].innerHTML = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        JugadorComputadora.append(imgCarta)
        if(puntosMinimos > 21){
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


}
// eventos de botones

btnpediCarta.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);

    //logica de mostrar puntaje del marcador

    mostraMarcador[0].innerHTML = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divMostrarCartas.append(imgCarta)

    // Mostrar imagen de cada carta <img class="carta" src="./assets/cartas/2H.png" alt=""> 

    if (puntosJugador > 21) {
        btnpediCarta.disabled = true;
        mostraMarcador[0].innerHTML = puntosJugador + ' Perdiste'
        turnoComputadora(puntosJugador)


    } else if (puntosJugador === 21) {
        btnpediCarta.disabled = true;
        mostraMarcador[0].innerHTML = puntosJugador + ' puntosJugador '
        turnoComputadora(puntosJugador)
    }

});
// Detener partida

detenerPartida.addEventListener('click', () => {
    btnpediCarta.disabled = true;
    detenerPartida.disabled = true;
    turnoComputadora(puntosJugador)
    
});
