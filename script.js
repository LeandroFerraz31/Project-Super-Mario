// scripts.js

function toggleNav() {
	const nav = document.querySelector('.header-nav');
	if (window.innerWidth <= 768) {
		// Check if the screen is small
		nav.classList.toggle('active');
	}
}

function mostrarForm() {
	const mask = document.querySelector('.contact-mask');
	const form = document.querySelector('.contact-form');

	// Show the mask
	mask.style.visibility = 'visible';

	// Slide in the form
	form.classList.add('active');
}

function esconderForm() {
	const mask = document.querySelector('.contact-mask');
	const form = document.querySelector('.contact-form');

	// Hide the mask
	mask.style.visibility = 'hidden';

	// Slide out the form
	form.classList.remove('active');
}