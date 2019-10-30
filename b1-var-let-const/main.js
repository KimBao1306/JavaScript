//var: có thể khai báo lại - có thể gán giá trị mới. Giới hạn trong function scope
/*
    var a = 10; //khai báo biến
    console.log(a); // 10
    
    var a = 20; //khai báo lại biến
    console.log(a); // 20
    
    a = 30; //gán giá trị mới
    console.log(a); // 30

    function run() {
        var a = 40;
    }
    run();
    console.log(a); // 30 vì a trong run() bị giới hạn trong function
*/
//let: không thể khai báo lại - có thể gán giá trị mới. Giới hạn trong block scope {}
/*
    let b = 10; //khai báo biến
    console.log(b); //10
    
    let b = 20; //khai báo lại biến
    console.log(b); // Error vì let không thể khai báo lại
    
    b = 30; //gán giá trị mới
    console.log(b); // 30

    if (true) {
        let b = 40;
    }
    console.log(b); // 30 vì b bị giới hạn trong block scope {}
*/
//const: không thể khai báo lại - không thể gán giá trị mới.Giới hạn trong block scope {}
/*
    const b = 10; //khai báo biến
    console.log(b); //10

    const b = 20; //khai báo lại biến
    console.log(b); // Error vì const không thể khai báo lại

    b = 30; //gán giá trị mới
    console.log(b); // Error vì const không thể gán giá trị mới

    if (true) {
        const b = 40;
    }
    console.log(b); //  10 vì b bị giới hạn trong block scope {}
*/

//for loop dùng var và let
/*
    for (var i = 1; i <= 5; i++) {
        console.log(i); // 1 2 3 4 5
    }
    console.log(i); // 6 vì var không bị giới hạn trong block scope mà chỉ giới hạn trong function scope

    for (let i = 1; i <= 5; i++) {
        console.log(i); // 1 2 3 4 5
    }
    console.log(i); // not defind vì let bị giới hạn trong scope {}

    for (var i = 1; i <= 5; i++) {
        setTimeout(() => console.log(i), 1); // 6 6 6 6 6
    }
    console.log(i); // 6 vì var không bị giới hạn trong block scope mà chỉ giới hạn trong function scope

    for (let i = 1; i <= 5; i++) {
        setTimeout(() => console.log(i), 1); // 1 2 3 4 5
    }
    console.log(i); // not defind vì let bị giới hạn trong scope {}
*/