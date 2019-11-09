//destructuring
// const arr = [1, 2, 3, 4, 5];

// //gán giá trị của mảng arr ở vị trí 1 và 2 cho lần lượt 2 biến a, b
// const [a, b] = arr;
// console.log(a, b);
// console.log('----');

// //gán giá trị của mảng arr ở vị trí 1 cho biến c và phần còn lại dùng ...rest tạo thành 1 mảng cho biến d
// const [c, ...d] = arr;
// console.log(c, d);
// console.log('----');

// //muốn bỏ qua vị trí nào chỉ cần thêm dấu ,
// //gán giá trị của mảng arr ở vị trí 1 và 5 cho lần lượt 2 biến e, i
// const [e, , , , i] = arr;
// console.log(e, i);
// console.log('----');

const obj = {
    a: 1,
    b: 2,
    c: 3
};

//tìm key a trong obj và gán value của key a cho biến x
const { a: x, b: y, c: z } = obj;
console.log(x, y, z);

//ta có thể không cần khai tên biến nếu muốn dùng tên biến trùng với key của obj
//tìm key a trong obj và gán value của key a cho biến a
const { a, b, c } = obj;
console.log(a, b, c);