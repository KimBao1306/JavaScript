//so sánh call() và bind()
/**
 * cả 2 hàm đều có thể truyền vào 1 obj để cấp context từ obj cho từ khóa THIS trong hàm
 * call() sẽ gọi hàm ngay lập tức || bind() trả về hàm để gọi sau
 */

const obj = {
    name: 'Bảo'
};

function sayHi(a) {
    console.log(`Hi, My name is ${this.name}, I am from ${a}`);
}

sayHi.call(obj, 'Vietnam'); //chạy hàm ngay lập tức
sayHi.bind(obj, 'Vietnam')(); //cần () để chạy hàm