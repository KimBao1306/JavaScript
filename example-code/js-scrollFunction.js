// get element
var end = document.body.scrollHeight;

window.addEventListener('scroll', scrollFunction);
	function scrollFunction(){
		console.log(scrollY)
		if(scrollY >= 50){
			btnTop.style.display = 'block';
		} else {
			btnTop.style.display = 'none';
		};
		
		if (scrollY >= end - 1200  && scrollY <= end) {
			btnBottom.style.display = 'none';
		} else {
			btnBottom.style.display = 'block';
		}
	}

var btnTop = document.getElementById('scroll-to-top');
	btnTop.addEventListener('click', toTop);
	function toTop(post){
		var top = setInterval(function(){
			scrollY -= 50;
			window.scrollTo(0, scrollY);
			if(scrollY <= 40){
				clearInterval(top)
			}
		}, 50)
	}


var btnBottom = document.getElementById('scroll-to-bottom');
	btnBottom.addEventListener('click', toBottom);
	function toBottom(){
		var bottom = setInterval(function(){
			scrollY += 50;
			window.scrollTo(0, scrollY);
			if(scrollY >= end - 600  && scrollY <= end){
				clearInterval(bottom);
				console.log(scrollY)
			}
		}, 50)
	}
