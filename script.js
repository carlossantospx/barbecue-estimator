// Meat - 400gr/person + 6hours - 650
// Beer - 1200ml/person + 6hours - 2000ml
// Soda/Water - 1000ml/person + 6hours 1500ml

// Kids half the values
// Upgrades: Woman/Men? Drink/Don't drink alcohol?

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate(){
    console.log("Calculating...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let TotalMeatQtdy = meatPP(duration) * adults + (meatPP(duration) / 2 * kids);
    console.log(TotalMeatQtdy);
    let TotalBeerQtdy = beerPP(duration) * adults;
    console.log(TotalBeerQtdy);
    let TotalBevsQtdy = bevsPP(duration) * adults + (bevsPP(duration) / 2 * kids);
    console.log(TotalBevsQtdy);

    result.innerHTML = `<h2 class="result-info">Here's what you need:</h2>`
    result.innerHTML += `<div class="result-block">
    <img src="./assets/bbq.png"/><p>${TotalMeatQtdy / 1000} 
    Kg of Meat</p></div>`
    result.innerHTML += `<div class="result-block">
    <img src="./assets/beer.png"/><p>${Math.ceil(TotalBeerQtdy / 355)} 
    Cans of Beer</p></div>`
    result.innerHTML += `<div class="result-block">
    <img src="./assets/beverages.png"/><p>${Math.ceil(TotalBevsQtdy / 2000)        
    }x 2L Beverages</p></div>`
}

function meatPP(duration){
    
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPP(duration){
   
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bevsPP(duration){
    
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}