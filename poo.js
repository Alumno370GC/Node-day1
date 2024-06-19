class Animal{
hacerSonido(){

console.log("El animal hace SOnido. ")

}


}

class Perro extends Animal{
hacerSonido(){
console.log("El perro ladra: ¡Guau guau!");

}

}

class Gato extends Animal{
hacerSonido(){
console.log("El gato maulla:¡ Miua, miau!   ");

}


}

const animal1 = new Perro();
const animal2 =new Gato();

animal1.hacerSonido()
animal2.hacerSonido()

