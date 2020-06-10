const characterWithLongestName = function (characters) {
    let competitorsArray = [];
    let winner = '';
    for (let contendant = 0; contendant < characters.length; contendant++) {
        competitorsArray.push(characters[contendant].name);
    }
    console.log(competitorsArray);
    for (let winnerNumber = 0; winnerNumber < competitorsArray.length; winnerNumber++) {
        if (winnerNumber === 0) {
            winner = competitorsArray[0];
        }
        else if (competitorsArray[winnerNumber].length > winner.length) {
            winner = competitorsArray[winnerNumber];
        }
    }
    return winner
};

console.log(characterWithLongestName([
    { name: "Naruto Uzumaki", anime: "Naruto" },
    { name: "Goku", anime: "Dragonball Z" },
    { name: "Sakura", anime: "Naruto" },
    { name: "Mikasa Ackerman", anime: "attack on titan" },
    { name: "Meliodas", anime: "seven deadly sins" }
]));