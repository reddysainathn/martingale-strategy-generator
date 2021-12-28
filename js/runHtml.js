// var martingale = require('./martingale.js')

function check() {

    var minimumBet = document.getElementById('minimumBet').value

    var playRounds = document.getElementById('playRounds').value

    var response = run(minimumBet, playRounds)
    var tableString = `
            <table>
                <tr>
                <th>Round</th>
                <th>Bet Amount</th>
                </tr>
        `
    for (i = 0; i < response.rounds.length; i++) {
        var temp = "<tr>"
        temp += `<td>${i+1}</td>
            <td>${response.rounds[i]}</td>`
        temp += "</tr>"
        tableString += temp
    }
    tableString += '</table>'

    document.getElementById('martingaleTable').innerHTML = tableString
    document.getElementById('totalAmount').innerHTML = `
        <h3>Total Amount $${response.totalAmout}</h3>
    `
}