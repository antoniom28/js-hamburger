let element = document.querySelector('.header-right .fas.fa-bars');
element.addEventListener('click', function() {
    document.querySelector('.hamburger-menu').style.display = 'block'
  });

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.hamburger-menu').style.display = 'none'
});