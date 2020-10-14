var dado = [1, 2, 3, 4, 5, 6];

var lanci = [];

for (var i = 0; i <= 1; i++) {
    var valoreLancio = Math.floor(Math.random() * dado.lenght);
    var giocata = dado[valoreLancio];
    lanci.push(giocata)
}

if (lanci[1] > lanci[2]){
    console.log('Vince il primo giocatore' + lanci);

} else if (lanci[1] < lanci[2]) {
    console.log('Vince il secondo giocatore' + lanci);
} else {
    console.log('Parità' + lanci);
}
