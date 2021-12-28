const martingale = require('./martingale.js')
const prompt = require('prompt');

prompt.get(['minBet', 'count'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    martingale.run(result.minBet, result.count)
});

function onErr(err) {
    console.log(err);
    return 1;
}