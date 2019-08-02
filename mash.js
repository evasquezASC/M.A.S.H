function mash() {
    return "You'll live in a " + getHome() + ", you'll have " + getChildrenCount() + " kids" + ",and you'll drive a " + getCar();
}

console.log(mash());



function getHome() {
    let places = ["Mansion", "Apartment", "Shack", "House"]
    places.push(process.argv[2])
    let randomPlaces= places[Math.floor(Math.random() * places.length)];
    return randomPlaces;
}

function getChildrenCount() {
    const numofChildren = Math.floor(Math.random() * 100);
    return numofChildren;
}

function getCar() {
    const expensiveCars = ["Lamborghini", "Maserati", "BMWi8", "Ferrari", "Rolls Royce"]
    const randomCars = expensiveCars[Math.floor(Math.random() * expensiveCars.length)];
    return randomCars;
}

