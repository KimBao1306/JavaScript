/**
 * value types - number, string, boolean.
 * khi so sánh value types thì ta đang so sánh 2 giá trị với nhau
 * khi khai báo 1 biến đã có giá trị cho 1 biến khác nó sẽ bằng nhau.
 * khi ta thay đổi giá trị 1 trong 2 biến thì biến còn lại không ảnh hưởng
 */
let a = 1;
let b = 1;
console.log(a === b); //true

let c = b;
console.log(b === c); //true

c = 10;
console.log(b); //1
console.log(c); //10

console.log('-------------');

/**
 * reference types - object, array, function
 * khi so sánh 2 reference types với nhau thì thực chất ta đang so sánh 2 chuỗi được tạo ra trong bộ nhớ cho 2 object. Tên biến chỉ là địa chỉ trỏ đến chuỗi đó(like domain - hosting).
 * khi khai báo 1 biến đã có giá trị cho 1 biến khác. thì thực ra 2 biến đang cùng trỏ đến cùng 1 chuỗi trong bộ nhớ (like park domain) nên nó luôn bằng nhau.
 * gán giá trị mới cho obj3 và giá trị của obj2 cũng bị thay đổi theo.
 */
let obj1 = { name: 'Bảo' };
let obj2 = { name: 'Bảo' };
console.log(obj1 === obj2); //false

let obj3 = obj2;
console.log(obj3 === obj2); // true

obj3.name = 'Đào';
console.log(obj2); // name: Đào
console.log(obj3); // name: Đào