let element = document.querySelector('.header-right .fas.fa-bars');
element.style.transform = 'scale(1.5)';
element.style.marginRight = '5px';

element.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = 'block'
});

element.addEventListener('mousemove', function () {
    element.style.transform = 'scale(1.7)';
});

element.addEventListener('mouseleave', function () {
    element.style.transform = 'scale(1.5)';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = 'none'
});

document.querySelector('.close').addEventListener('mousemove', function () {
    document.querySelector('.close').style.transform = 'scale(1.2)';
});

document.querySelector('.close').addEventListener('mouseleave', function () {
    document.querySelector('.close').style.transform = 'scale(1)';
});