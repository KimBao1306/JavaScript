/**
 * super: khi kế thừa từ baseclass ta sẽ được kế thừa toàn bộ bên trong class. Nhưng nếu ta muốn thêm 1 tiêu chí vào bên trong hàm thì sẽ dũng đến super
 * static: hàm chỉ dành riêng cho class. Các obj được tạo từ new sẽ không thể sử dụng
 */
//khai báo class Animal - baseclass
class Hero {
    constructor(name, hp, damage) {
        this.name = name; //tên nhân vật
        this.hp = hp; //máu của nhân vật
        this.damage = damage; //lực chiến của nhân vật
    }

    //trừ máu = với lực đánh
    applyDamage(damage) {
        this.hp -= damage;
    }

    //tấn công kẻ thù
    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

const heroA = new Hero('A', 100, 20);
const heroB = new Hero('B', 200, 10);

console.log({ heroA, heroB }); //2 hero được tạo từ class hero
console.log('----------');

heroA.attack(heroB); //tấn công heroB

console.log({ heroA, heroB });
console.log('----------');

//kế thừa từ class Hero
class SuperHero extends Hero {
    constructor(name, hp, damage, defend) {
        super(name, hp, damage); //dùng super khỏi cần khai báo lại các thuộc tính đã có của class
        this.defend = defend; //thêm thuộc tính mới
    }

    attack(enemy) {
        super.attack(enemy); //không cần khai báo lại thuộc tính

        this.hp += this.damage; //thuộc tính mới: tăng máu khi đánh
    }
}

const superC = new SuperHero('C', 300, 50);
superC.attack(heroA);

console.log({ superC, heroA });
console.log('----------');

class Enemy extends Hero {
    //khai báo static thì chỉ có class mới được truy vấn
    static killedList() {
        console.log('10 Killed');
    }
}

const enemy1 = new Enemy('D', 200, 30);

// enemy1.killedList(); // error vì không thể sử dụng hàm static.
Enemy.killedList(); //chỉ có class Enemy mới được sử dụng hàm