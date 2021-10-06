const showHide = document.querySelector('.group-password'),
    passIpt = document.querySelector('#password');
showHide.addEventListener('click', e => {
    if (e.target.classList.contains('fa-eye')) {
        e.target.classList.remove('show');
        passIpt.setAttribute('type', 'text');
        document.querySelector('.fa-eye-slash').classList.add('show');
    }
    if (e.target.classList.contains('fa-eye-slash')) {
        e.target.classList.remove('show');
        passIpt.setAttribute('type', 'password');
        document.querySelector('.fa-eye').classList.add('show');
    }
});

const loading = document.querySelector('.box'),
    form = document.querySelector('.form-login');
setTimeout(() => {
    loading.style.opacity = 0;
    loading.style.display = 'none';

    form.style.display = 'block';
    setTimeout(() => (form.style.opacity = 1), 50);
}, 1000);