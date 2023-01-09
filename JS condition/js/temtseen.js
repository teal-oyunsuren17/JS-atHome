let aScore1 = 96;
let aScore2 = 108;
let aScore3 = 89;
let averageA= (aScore1 + aScore2 + aScore3) / 3;

let bScore1 = 88;
let bScore2 = 91;
let bScore3 = 110;
let averageB= (bScore1 + bScore2 + bScore3) / 3;

let result = "";

console.log("A team average:"+averageA);
console.log("B team average:"+averageB);

if ( averageA>=100 && averageB>=100 ) {
    if (averageA>averageB) {
        result = "Winner is A team"
    } else if (averageA==averageB) {
        result = "Teams score equal"
    } else {
        result = "Winner is B team"
    }
} else {
    result = "No winner "
}
console.log(result)