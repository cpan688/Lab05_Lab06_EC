let miles;
let gallons;
let mpg;
let again = 'y';
let validChoice;

do {                        // ask user to enter miles driven and tank capacity
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    do {                    // validate if the user entered either a 'y' to run again, or 'n' to exit
        again = prompt('Run application again? (y or n)', 'y');
        validChoice = false;
        if (again == 'y' || again == 'n') {
            validChoice = true;
        } else {
            alert("Invalid choice - please enter either 'y' or 'n'.");           
        }
    } while (validChoice == false);
} while (again === 'y');    // if user enter 'y': run again, if 'n': exit application
console.log('Application has exited.');