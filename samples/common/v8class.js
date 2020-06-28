function main() {   
  const animal = new Animal('Cat')
  animal.printName(); // Cat
  Animal.beProud();
  console.info(JSON.stringify(animal));
  return animal;
};

class Animal {
 constructor(name) {
   this.name = name
 }
 //static legCount = 4

 static beProud() {
   console.log('I AM AN ANIMAL')
 }

 printName() {
   console.log(this.name)
 }
}
