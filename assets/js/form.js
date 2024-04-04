const submitBtn = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const storeInfo = {
username: usernameInput.value,
title: titleInput.value,
content: contentInput,
};
function setStorage {
    localStorage.setItem('info', JSON.stringify(storeInfo))
if (!storeInfo) {
    storeInfo=[];
}};

submitBtn.on('submit', function (event) {
    event.preventDefault();
    setStorage();
    window.location.href = 'file:///Users/demetriuswhitejr./Desktop/smu/challenges/my-blog/blog.html';
    if(!usernameInput || !titleInput || !contentInput) {
        alert('Please complete form');
    }
    
    
});





