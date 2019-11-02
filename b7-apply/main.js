//so sánh call() và apply()
/**
 * call(obj, param1, param2, ...) truyền vào các param riêng lẻ|| apply(obj, [param1, param2, ...]) truyền vào array-like object
 *
 */
function sum() {
    const arr = Array.from(arguments);
    return arr.reduce((total, num) => total + num, 0);
}

function average() {
    //sum
    const total = sum.apply(null, arguments);
    //sum/length
    return total / arguments.length;
}

console.log(average(1, 2, 3, 4, 5));
// console.log(sum(1, 2, 3, 4, 5));