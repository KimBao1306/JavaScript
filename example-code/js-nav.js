var body = document.getElementsByTagName('body')[0];

window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
	var positionY = window.scrollY;
	if(positionY >= 60){
		body.classList.add('fixed-nav')
	} else {
		body.classList.remove('fixed-nav')
	};
}