const form = document.querySelector('.form'),
    ipt = document.querySelector('.header-search'),
    btn = document.querySelector('.search-btn'),
    songs = document.querySelectorAll('.newsongs-list .song-title'),
    dataList = document.querySelector('#songs');
let nameOfSongs = [];

for (let i = 0; i < songs.length; i++) {
    nameOfSongs.push(songs[i].innerHTML);
    createOption(songs[i].innerHTML);
}

function createOption(name) {
    const opt = document.createElement('option');
    opt.setAttribute('value', name);
    form.lastElementChild.appendChild(opt);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (nameOfSongs.includes(ipt.value)) {
        location.href = `../GD2/newsong-pages/newsong${nameOfSongs.indexOf(
			ipt.value
		) + 1}.html`;
    }
});