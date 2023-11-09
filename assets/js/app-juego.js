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

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'j', 'Q', 'K']
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

    let carta = deck.pop()
    if (deck.length === 0) {
        throw 'no hay carta en el deck'

    }
   

    return carta;


}
const carta = pedirCarta();
console.log({carta})


//valor de la carta 

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)

   return (isNaN(valor))? (valor === 'A') ? 11 : 10
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

const valor = valorCarta(carta)

// eventos de botones