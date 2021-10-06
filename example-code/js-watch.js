function jsWatch(){
	var baseTime = new Date(); // get time in js

	var dMY = document.getElementById('dd-mm-yy'); // choose area in html
	var hMS = document.getElementById('h-m-s');
	var dayOfWeek = document.getElementById('day-of-week');

	var nameOfDay = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
	var day = nameOfDay[baseTime.getDay()]
	var date = baseTime.getDate();	
	var month = baseTime.getMonth() + 1; // get month with january is 0
	var year = baseTime.getFullYear();
	var hours = baseTime.getHours();
	var minutes = baseTime.getMinutes();
	var seconds = baseTime.getSeconds();

	var addZero = function(item){
		if(item.toString().length < 2) {
			return '0' + item
		} else {
			return item
		}
	}

	dayOfWeek.innerHTML = day;

	var dateMonthYear =addZero(date) + '/' + addZero(month) + '/' +  year;
	dMY.innerHTML = dateMonthYear;

	var hoursMinutesSeconds = addZero(hours) +':'+ addZero(minutes) +':'+ addZero(seconds);
	hMS.innerHTML = hoursMinutesSeconds;

	setTimeout(function (){
		seconds++;
		jsWatch();
	}, 1000)
}

jsWatch();

// 	<div id="js-watch" class="watch">
// 		<div id="day-of-week" class="watch-day"></div>
// 		<div id="dd-mm-yy" class="watch-dmy"></div>
// 		<div id="h-m-s" class="watch-hms"></div>
// 	</div>
// 	<script type="text/javascript" src="js-watch.js"></script>