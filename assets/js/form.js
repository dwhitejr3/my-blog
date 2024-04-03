const submitBtn = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const info = {
        username: usernameInput.value(),
        title: titleInput.value(),
        content: contentInput.value(),
    };
    localStorage.setItem('info', JSON.stringify(info));
});