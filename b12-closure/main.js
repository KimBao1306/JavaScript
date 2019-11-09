function mulNumber(number1) {
    let n = number1; //biến bị giới hạn trong scope
    //trả về 1 hàm
    return function(number2) {
        return n * number2;
    };
}
//Thông thường sau khi kết thúc hàm thì các biến bên trong hàm sẽ bị clear đi và không thể truy cập từ phía ngoài
//nhưng khi ta trả về một hàm thì hàm đó có khả năng truy cập lại biến trong scope => closure
const mul_5 = mulNumber(5);

console.log(mul_5(5)); // 5 * 5 = 25
console.log(mul_5(2)); // 5 * 2 = 10