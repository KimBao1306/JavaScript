function sum(a, b) {
    return a + b;
}

const sumAr = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sumAr(1, 2));

const a = {
    name: 'Bảo',

    // sayHi: function() {
    //         console.log(this.name); //this.name = Bảo
    //     }

    // sayHi: () => {
    //     console.log(this.name); //this.name = undifined vì arrow function không có từ khóa THIS
    // }

    // sayHi: function() {
    //     // hàm trong hàm
    //     const sayHello = function() {
    //         console.log(this.name); //this.name = undifined vì không có context cho hàm sayHello
    //     };
    //     sayHello();
    // }

    //--cách giải quyết hàm trong hàm--
    // sayHi: function() {
    //     // hàm trong hàm
    //     const that = this; //biến that sẽ thay thế cho từ khóa THIS và THIS là obj a
    //     const sayHello = function() {
    //         console.log(that.name); //this.name = Bảo vì hàm đã nhận context từ that
    //     };
    //     sayHello();
    // }

    // sayHi: function() {
    //     // hàm trong hàm
    //     const sayHello = function() {
    //         console.log(this.name); //this.name = Bảo vì dùng bind(a) || bind(this)
    //     }.bind(this);
    //     sayHello();
    // }

    sayHi: function() {
        // hàm trong hàm
        const sayHello = () => {
            //dùng arrow function
            console.log(this.name); //this.name = Bảo vì arrow function không có từ khóa THIS cho nên nó sẽ nhận THIS từ function chứa nó
        };
        sayHello();
    }
};

a.sayHi();