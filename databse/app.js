const $form = document.querySelector('.form');
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('email', $email.value);
    localStorage.setItem('password', $password.value);
});

$email.value = localStorage.getItem('email') || '';
$password.value = localStorage.getItem('password') || '';
