// Question 1
console.log(hello);                                   
var hello = 'world';                                 

// var hello;
// console.log(hello) - returns undefined
// hello = 'world'

// Question 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack'
// test()
// var needle = 'magnet'
// console.log(needle) - returns magnet

// Question 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendon = 'super cool'
// console.log(brendan) - returns super cool

// Question 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken'
// console.log(food) - returns chicken
// eat():
// food = 'half-chicken'
// console.log(food) -returns half-chicken
// var food = 'gone'

// Question 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Will return an error. Mean is not a function

// Question 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre) - Will return undefined
// var genre = 'disco'
// rewind()
// genre = 'rock'
// console.log(genre) - returns rock
// var genrea = 'r&b' - returns r&b
// console.log(genre) - returns disco

// Question 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo = 'san jose'
// console.log(dojo) - returns san jose
// learn()
// dojo = 'seattle'
// console.log(dojo) - returns seattle
// dojo = 'burbank'
// console.log(dojo) - return burbank
// console.log(dojo) - return san jose



