// declare global variable

var message = "Hello";

function greet(){
console.log(`local:  ${message}`);
}

greet();

console.log(`Global: ${message}`);

//JavaScript Block-Level Variables



function display_scopes(){
//declare variable in local scope
let message =" local";

if(true){

//declared block level variable
let message = "block-level";
console.log(`inner scope: ${message}`);

}

console.log(`outer scope: ${message}`);

}

display_scopes();