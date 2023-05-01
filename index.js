
const bodyElement = document.querySelector('body');

const showMenu = () => {
    document.querySelector('aside').classList.add('active');
    document.querySelector('.backdrop').classList.add('active');
    bodyElement.style.overflow = 'hidden'
}

const closeMenu = () => {
    document.querySelector('aside').classList.remove('active');
    document.querySelector('.backdrop').classList.remove('active');
    bodyElement.style.overflow = 'auto';
}

document.querySelector(".menu").addEventListener("click", (e) => {
    e.preventDefault();
    showMenu();
});

document.querySelector(".close").addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})

document.querySelector(".backdrop").addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
})