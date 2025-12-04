var a=5; //var
var a=10;
a=15;
console.log(a);

// let
let a = 5;
// let a = 10; ❌ not allowed
a = 10;     // ✔ allowed
console.log(a);

// const can be redeclared or update
const pi=3.14;
console.log(pi);

//funct declare
function greet(){
    console.log("Hello");
}
greet();
//function parameter
function add(a,b){
    console.log(a+b);
}
add(2,4);
function mul(a,b){
    console.log(a*b);
}
mul(4,5);
function div(a,b){
    console.log(a/b);
}
div(10,5);

//function return value
function mul(a,b){
    return a*b;
}
let result=mul(2,4);
console.log(result);
 //function expression
 let greet = function() {
    console.log("Hi!");
}
greet();
