const wrapper = document.querySelector('.wrapper');
const loginLinks = document.querySelectorAll('.login-link'); 
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const forgotLink = document.querySelector('.forgot-link');
const sendLinkBtn = document.querySelector('.btn-send-link');
const changePasswordLink = document.querySelector('.change-password-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-forgot');
    wrapper.classList.remove('active-change'); 
});

loginLinks.forEach(link => {
    link.addEventListener('click', () => {
        wrapper.classList.remove('active');
        wrapper.classList.remove('active-forgot');
        wrapper.classList.remove('active-change');
        wrapper.classList.remove('active-direct-change');
    });
});

forgotLink.addEventListener('click', ()=> {
    wrapper.classList.add('active-forgot');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-change');
});

changePasswordLink.addEventListener('click', () => {
    wrapper.classList.add('active-direct-change');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-forgot');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-forgot');
    wrapper.classList.remove('active-change');
    wrapper.classList.remove('active-direct-change');
});