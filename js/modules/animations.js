"user strict";

/*
	It applies the respective animation function as the given parameters catched
	(if parameter is not found or is not valid, it cancels animation & show a console error).
	Also get the ScrollReveal object into a variable
	(if declaration is failed, it cancels animation & show a console error).
*/
export function initAnimations(page){
	try{
		const sr = ScrollReveal();
		switch (page){
			case 'landing':
				landingAnimations(sr);
				break;
			default:
				console.error(`Sorry, \"${page}\" is not a valid parameter at initAnimations()`);
				document.querySelector('html.sr').style.visibility = 'visible';
		}
	}catch(e){
		console.error(`${e.name}: ${e.message}`);
		document.querySelector('html.sr').style.visibility = 'visible';
	}
}

/*
	It applies the landing page animations
*/
function landingAnimations (sr) {
	const hero = [
		document.querySelector('#hero .hero-title'),
		document.querySelector('#hero .hero-title + p.lead')
	];
	const sectionItems = [
		document.querySelector('#quienes-somos .section-title'),
		document.querySelector('#quienes-somos .section-description')
	];
	const sections = [
		document.querySelector('#quienes-somos'),
		document.querySelector('#servicios'),
		document.querySelector('#contacto'),
		document.querySelector('#mapa'),
		document.querySelector('footer')
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

	// Parallax, sections
	sr.reveal(sections, {
		origin: 'bottom',
		duration: 1000,
		viewFactor: 0.1
	});
	sr.reveal('.parallax', {
		origin: 'bottom',
		duration: 2000,
		viewFactor: 0.3
	});
	sr.reveal('.parallax-text', {
		origin: 'bottom',
		duration: 2000,
		distance: '100px',
		mobile: false,
		viewFactor: 1
	});
	sr.reveal('#quienes-somos .container', {
		container: '#quienes-somos',
		origin: 'bottom',
		duration: 2000
	});
	sr.reveal(sectionItems, {
		origin: 'top',
		duration: 2000,
		distance: '50px',
		viewFactor: 0.1,
		interval: 400
	});
	// Services
	sr.reveal('#servicios .grid-item', {
		origin: 'top',
		duration: 1500,
		distance: '20px',
		interval: 333,
		viewFactor: 0.2
	});
	sr.reveal('.contact-item',{
		dektop: false,
		origin: 'bottom',
		duration: 2000,
		delay: 500,
		distance: '50px',
		interval: 400,
	});	
	sr.reveal('#serviceModal', {
	origin: 'bottom',
	duration: 0
	});
}
