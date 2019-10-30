//bind(). Nếu bên trong obj medthod chứa từ khóa THIS khi ta gán hàm vào 1 biến hoặc là sử dụng hàm. Thì hàm sẽ trả về undifined cho THIS keyword vì hàm thiếu context. Dùng bind(obj) và truyền vào 1 obj để tạo ra 1 hàm mới dựa trên hàm cũ. bind() sẽ lấy context từ obj truyền vào.

const obj = {
    name: 'Bảo',
    sayHi: function() {
        console.log('Xin Chào: ' + this.name);
    }
};
obj.sayHi(); // this.name = Bảo

const obj2 = obj.sayHi;
obj2(); // this.name = undifined vì obj2 không có context

const obj3 = obj.sayHi.bind(obj);
obj3(); //this.name = Bảo vì bind(obj) sẽ tạo ra 1 hàm mới và lấy context từ obj truyền vào

const obj4 = {
    name: 'Đào',
    hi: obj.sayHi // this.name = Đào vì chỉ là gán hàm cho key
        // hi: obj2 //this.name = Đào vì lúc này obj2 đã cón context
        // hi: obj3 //this.name = Bảo vì dùng bind và truyền vào obj làm tham số
};
obj4.hi();