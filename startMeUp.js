const readLine = require("readline-sync")

let name = readLine.question("Who are you? ")
let height = readLine.questionInt("How tall are you? ")
console.log("Please to meet you, "+name)

if(height > 7){
    console.log("Please consider trying out for the basketball")
}else{
    console.log("Please consider trying out for the rugby team")
}