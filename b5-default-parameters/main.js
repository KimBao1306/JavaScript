//default-params là những giá trị đầu vào được thiết lập sẵn nếu không có tham số truyền vào

//không đặt default-params
function sayHi(name) {
    console.log(`Hi, ${name} `);
}

sayHi(); // nếu không truyền tham số thì output: Hi, undifined
sayHi('Bảo'); // truyền tham số thì output: Hi, Bảo

//đặt default-params cho biến đầu vào name = 'bạn'
function sayHello(name = 'bạn', language = 'en') {
    if (language === 'vie') {
        console.log(`Hello, ${name}. Can you speak Vietnamese?`);
        return;
    }
    console.log(`Hello, ${name}. Can you speak English?`);
}

sayHello(); // nếu không truyền tham số thì output: Hello, bạn
sayHello('Bảo', 'vie'); // truyền tham số thì output: Hello, Bảo