// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as x.x (between 0.0 - 6.0)'));
years = parseInt(prompt('Enter the number of years you want to invest for (between 1 - 30)'));

// Validate user input 
if ( !isNaN(investment) && !isNaN(rate) && !isNaN(years) && ((rate > 0.0) && (rate < 6.0)) && ((years > 1) && (years < 30)) ) {
    // CALCULATE FUTURE VALUE
    futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    // DISPLAY RESULT
    document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
    document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
    document.write(`Years: ${years}<br>`);
    document.write(`Future value: $${futureValue.toFixed(2)}`); 
} else {
    alert('One or all entries are invalid.');
}

// Terminate application
console.log('Application has exited.');
