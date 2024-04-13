console.log("We LIVE!")
//Variables
//let r = 5
let AreaofCircle = (r) => {
    let pie = 3.14
    return pie * r * r
}
console.log(AreaofCircle(5)) // 78.5m

const plantSpace = 78.5
const plantReqSpace = 0.8

let numOfPlants = (20)

let per80 = (80 * plantSpace) / 100; // 62.8, A demo to make sure the formula calculates the percentage OF the total space




///////////////// Part 1: Growing Pains

// Week 1
if (plantReqSpace * numOfPlants > 80 * plantSpace / 100) { // calculates 80% of the total space to determine if the garden should be pruned
    console.log(`Plants need to be pruned`)
} else if (plantReqSpace * numOfPlants > 50 * plantSpace / 100 + (plantReqSpace * numOfPlants < 80 * plantSpace / 100)) { // calculates whether the garden should be monitored IF between 50-80% max capacity
    console.log(`Plants should be monitored`)
} else if (plantReqSpace * numOfPlants < 50 * plantSpace / 100) { // calculates whether more plants should be planted IF capacity is below 50%
    console.log(`Plants should be planted`)
} // Prints plants should be planted

// Week 2: Plants have doubled from week 1
if (plantReqSpace * (numOfPlants * 2) > 80 * plantSpace / 100) { // calculates 80% of the total space to determine if the garden should be pruned
    console.log(`Plants need to be pruned`)
} else if (plantReqSpace * numOfPlants > 50 * plantSpace / 100 + (plantReqSpace * numOfPlants < 80 * plantSpace / 100)) { // calculates whether the garden should be monitored IF between 50-80% max capacity
    console.log(`Plants should be monitored`)
} else if (plantReqSpace * numOfPlants < 50 * plantSpace / 100) { // calculates whether more plants should be planted IF capacity is below 50%
    console.log(`Plants should be planted`)
} // Prints plants should be planted

let week2growth = (numOfPlants * 2)

// Week 3: Plants have doubled from week 2
if (plantReqSpace * (week2growth * 2) > 80 * plantSpace / 100) { // calculates 80% of the total space to determine if the garden should be pruned using the growth from week 2
    console.log(`Plants need to be pruned`)
} else if (plantReqSpace * numOfPlants > 50 * plantSpace / 100 + (plantReqSpace * numOfPlants < 80 * plantSpace / 100)) { // calculates whether the garden should be monitored IF between 50-80% max capacity
    console.log(`Plants should be monitored`)
} else if (plantReqSpace * numOfPlants < 50 * plantSpace / 100) { // calculates whether more plants should be planted IF capacity is below 50%
    console.log(`Plants should be planted`)
} // Prints plants should be pruned


///////////////// Part 2: Thinking Bigger

console.log(plantReqSpace * (numOfPlants * 5)) // 80sqm is the minimum required space for 100 plants
let week1plants = (numOfPlants * 5)
let week1space = (plantReqSpace * (numOfPlants * 5))

console.log(week1plants * Math.pow(2, 9)) // Multiplied the number of plants by 5 then doubled the plants (2) to the 9th power to calculate the garden growing twice in size week over week for 10 weeks // 51200 plants

console.log(week1space * Math.pow(2, 9)) // Multiplied space required per plany by the number of plants by 5 then doubled the plants (2) to the 9th power to calculate the garden growing twice in size week over week for 10 weeks // 40960sqm

console.log(AreaofCircle(115)) // Reverse engineered my AreaofCircle formula to find the radius that would produce an area of a circle large enough to accomodate 40960sqm // Radius = 115, Total Area = 41526.5


///////////////// Part 3: Errors in Judgment

let plants = 100

try {
    if (plantReqSpace * plants < plantSpace) {
        console.log(`You're good to go!`)

    } else {
        throw "Ouch! You're hurting us - Plants";
    } 
} catch (error) {
    console.log(error);
}

console.log("Does this log")



