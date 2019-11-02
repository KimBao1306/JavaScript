//trong function luôn tồn tại 1 biến tên là arguments
//biến arguments này là 1 array-like object (các object mà lại giống như mảng) chúng ta có thể chuyển về array
//chúng ta không cần đặt tham số đầu vào nhưng vẫn có thể lấy được các giá trị trong biến arguments
function sum() {
    const arr = Array.from(arguments);
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));