import * as scrollReveal from './modules/animations.js';

function changeMenuIcon (ExpandTo, icon) {
	if(ExpandTo){
		icon.className = icon.className.replace('fa-bars', 'fa-times');
	} else {
		icon.className = icon.className.replace('fa-times','fa-bars');
	}
}
window.addEventListener('load', function(){
	headerScripts:{
		const navbarButton = document.querySelector('.navbar .navbar-toggler');
		const togglerIcon = document.querySelector('.navbar-toggler .navbar-toggle-icon .fas');
		navbarButton.addEventListener('click', function () {
			var isExpanded = navbarButton.getAttribute('aria-expanded') === 'true';
			if (isExpanded) {
				// expanded true
				changeMenuIcon(false, togglerIcon);
			} else {
				// expanded false
				changeMenuIcon(true, togglerIcon);
			}
		});
	}
	// Adding ScrollReveal Animations
	scrollReveal.landingAnimations();
});