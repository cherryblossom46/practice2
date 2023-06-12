const nav =document.querySelector('.nav-links');
const burger= document.querySelector('.burger');
const background= document.querySelector('.background');
const navLinks = document.querySelectorAll('.nav-links li');
console.log(navLinks);
burger.addEventListener("click",()=>{
	nav.classList.toggle('nav-active');
	burger.classList.toggle('toggle');
	navLinks.forEach((link,index)=> {
		if(link.style.animation){
			link.style.animation ="";
		}
		else {
			link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+0.4}s`;
		}
	});

	background.classList.toggle('background-active');


});
