class Animal{

 constructor(nombre){

   this.nombre= nombre;

    }
 
    mover(){
      console.log(`${this.nombre} se mueve.`);

    }

}

class Pajaro extends Animal{
mover(){
console.log(`${this.nombre} vuela en el cielo.`);


}

}

class Pez extends Animal{
mover(){
console.log(`${this.nombre} Nada en el agua.`);


}

}

class Gato extends Animal{
mover(){
console.log(`${this.nombre} Corre tas una pelota`)

}


}

//create instances of these classes and call the method mover()
let tweety = new Pajaro ("Tweety");
tweety.mover();

let nemo = new Pez ("Nemo");
nemo.mover();

let felix = new Gato ("Felix");
felix.mover();

