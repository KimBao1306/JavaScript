const slide = document.getElementsByClassName('banner')[0], // lấy banner
    nextBtn = document.querySelector('.next-btn'),
    prevBtn = document.querySelector('.prev-btn'),
    link = document.querySelector('.banner-link'),
    imgs = [],
    startInterval = true;
let slideInterval,
    current = 0;

for (let i = 1; i <= 5; i++) {
    imgs.push(`./imgs/banner/banner${i}.jpg`);
}

function startSlide() {
    slide.style.backgroundImage = `url('${imgs[0]}')`;
    link.setAttribute('href', `../GD2/newsong-pages/bannersong1.html`);
}

function nextSlide() {
    if (current >= imgs.length - 1) {
        current = -1;
    }
    slide.style.backgroundImage = `url('${imgs[current + 1]}')`;
    current++;

    link.setAttribute(
        'href',
        `../GD2/newsong-pages/bannersong${current + 1}.html`
    );
}

function prevSlide() {
    if (current === 0) {
        current = imgs.length;
    }
    slide.style.backgroundImage = `url('${imgs[current - 1]}')`;
    link.setAttribute('href', `../GD2/newsong-pages/bannersong${current}.html`);
    current--;
}

nextBtn.addEventListener('click', e => {
    nextSlide();
    if (startInterval) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
});
prevBtn.addEventListener('click', e => {
    prevSlide();
    if (startInterval) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
});

startSlide();

if (startInterval) {
    slideInterval = setInterval(nextSlide, 5000);
}

var img = document.getElementsByClassName('img');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', e => {
        clearInterval(slideInterval);
        current = i;

        link.setAttribute('href', `../GD2/newsong-pages/bannersong${i + 1}.html`);

        var src = e.target.getAttribute('src');
        var mainSrc = src.slice(0, src.lastIndexOf('b')).concat('.jpg');

        var bannerBg = document.getElementsByClassName('banner')[0];
        bannerBg.style.backgroundImage = 'url(' + mainSrc + ')';
    });
    img[i].addEventListener('mouseout', e => {
        slideInterval = setInterval(nextSlide, 5000);
        current = i;
    });
}