//khai báo class Animal - baseclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} Running....`);
    }
}

//class Bird thừa kế class Animal - subclass
class Bird extends Animal {
    fly() {
        console.log(`${this.name} Flying....`);
    }
}

//class Fish thừa kế class Animal - subclass
class Fish extends Animal {
    //method overriding: viết đè hàm
    run() {
        console.log(`${this.name} Running-2....`);
    }
}

const lion = new Animal('Lion King');
console.log(lion);
lion.run();

console.log('------');

const bird = new Bird('Angry Bird');
console.log(bird);
bird.run();
bird.fly();

console.log('------');

const fish = new Fish('Nemo');
console.log(fish);
fish.run();