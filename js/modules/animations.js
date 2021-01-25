export const sr = ScrollReveal();
export function landingAnimations (){
	const hero = [
		document.querySelector('#hero .hero-title'),
		document.querySelector('#hero .hero-title + p.lead')
	]
	
	// Navbar & Hero
	sr.reveal('.navbar', {
		origin: 'bottom',
		duration: 2000
	});
	sr.reveal ('.hero-image-wrapper img', {
		origin: 'right',
		duration: 2000,
		delay: 500,
		distance: '150px'
	});
	sr.reveal(hero,{
		dektop: false,
		origin: 'bottom',
		duration: 2000,
		delay: 500,
		distance: '50px',
		interval: 400,
	});
	sr.reveal(hero,{
		mobile: false,
		origin: 'bottom',
		duration: 2000,
		delay: 1000,
		distance: '50px',
		interval: 400,
	});
}
