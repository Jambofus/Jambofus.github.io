let burger = document.querySelector('.burger'),
header = document.querySelector('.header');

burger.addEventListener('click', ()=>{
	header.classList.toggle('open');
});

