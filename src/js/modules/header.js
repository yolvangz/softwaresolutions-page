function changeMenuIcon (ExpandTo, icon) {
	(ExpandTo) ? icon.className = icon.className.replace('fa-bars', 'fa-times') : icon.className = icon.className.replace('fa-times','fa-bars');
}
export function addHeader (){
	window.addEventListener('load', function(){
		headerScripts:{
			const navbarButton = document.querySelector('.navbar .navbar-toggler');
			const togglerIcon = document.querySelector('.navbar-toggler .navbar-toggle-icon .fas');
			navbarButton.addEventListener('click', function () {
				var isExpanded = navbarButton.getAttribute('aria-expanded') === 'true';
				(isExpanded) ? changeMenuIcon(false, togglerIcon) : changeMenuIcon(true, togglerIcon);
			});
		}
	});
}