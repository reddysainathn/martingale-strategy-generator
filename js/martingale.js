function run(minBet, count) {
    if (minBet === '0' || minBet === 0 || minBet === '' || minBet === null) {
        minBet = 10
        console.log('Default Minimum Bet is $10')
    }
    if (count === '0' || count === 0 || count === '' || count === null) {
        console.log('Default Count is 7')
        count = 7
    }
    console.log(`Minimum Bet : $${minBet}, to play : ${count} rounds`)
    var rounds = []
    for (i = 0; i < count; i++) {
        var currentBet = 0;
        if (i === 0) {
            currentBet = minBet
            rounds.push(minBet)
        } else {
            var lastBet = rounds[rounds.length - 1]
            currentBet = lastBet * 2
            rounds.push(currentBet)
        }
        console.log(`Bet ${i+1} : $${currentBet}`)
    }
    var totalAmount = rounds.reduce(function (a, b) {
        return Number(a) + Number(b);
    }, 0);
    console.log(`Amount required to play ${count} rounds : $${totalAmount}`)

    var response = {
        "minBet": minBet,
        "count": count,
        "totalAmout": totalAmount,
        "rounds": rounds
    }
    return response
}

module.exports = {
    run
}
