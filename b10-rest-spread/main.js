//...rest: gom các tham số đầu vào thành 1 mảng
//...spread: tách 1 mảng thành từng giá trị riêng lẻ

/** ------ */
// function demoRest(a, ...nums) {
//     console.log(a); // 1 - giá trị đầu tiên được truyền vào hàm
//     console.log(nums); // [2,.....,10] gom các tham số còn lại thành 1 mảng
//     console.log(arguments); // array-like object (giống array lại không phải là array) gom TẤT CẢ các tham số
// }

// demoRest(1, 2, 3, 4, 5, 6, 7, 8, 10);

/** ------ */
// function sum(...nums) {
//     //...nums là 1 mảng gom lại từ các tham số đầu vào
//     console.log(nums.reduce((total, current) => total + current, 0));
//     //khác với arguments là args sẽ gom tất cả lại thành 1 obj
//     console.log(
//         Array.from(arguments).reduce((total, current) => total + current, 0)
//     );
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8, 10);

/** ------ */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// function sum(...nums) {
//     //...nums là 1 mảng gom lại từ các tham số đầu vào
//     console.log(nums.reduce((total, current) => total + current, 0));
//     //khác với arguments là args sẽ gom tất cả lại thành 1 obj
//     console.log(
//         Array.from(arguments).reduce((total, current) => total + current, 0)
//     );
// }

// sum(...arr); //...spread: tách 1 mảng thành từng giá trị riêng

/** ------ */
// const arr1 = [2, 3, 4, 5];
// const arr2 = [1, ...arr1, 6, 7, 8, 10]; //trải arr1 ra thành từng phần tử bên trong arr2

// console.log(arr2);

/** ------ */
//đây chỉ là shallow clone vì nếu value là 1 hàm thì nó sẽ là refenrences types. nếu muốn giải quyết triệt để thì phải dùng deep clone
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4
    }
};

const obj2 = {
    ...obj1 //trải obj1 ra thành từng phần tử trong obj2
};

obj2.d.e = 1000; //reference types: thay đổi giá trị bên trong obj2 thì obj1 sẽ bị ảnh hưởng
obj1.a = 100; //value types: thay đổi giá trị của obj1 thì obj2 sẽ không bị ảnh hưởng

console.log({ obj1, obj2 });