var img = document.getElementsByClassName('img');

for (var i = 0; i < img.length; i++){
	img[i].addEventListener('mouseover', function (){
	var src = this.getAttribute('src');
	console.log(src)
	var mainSrc = src.slice(0, src.lastIndexOf('b'), '').concat('.jpg')

	var bannerBg = document.getElementsByClassName('banner')[0];
		bannerBg.style.backgroundImage = 'url(' + mainSrc + ')';
  	console.log(bannerBg);	
  })
}