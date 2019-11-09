//khi 1 hàm nhận 1 hàm làm tham số hoặc trả về 1 tham số là hàm thì đó là higher order function

//hàm nhận tham số là 1 hàm và mili giây
function waitAndRun(func, ms) {
    setTimeout(func, ms); //hàm được truyền vào sẽ chạy sau khi đủ ms
}

function run() {
    console.log('Run');
}

waitAndRun(run, 2000); //chạy hàm run sau 2s