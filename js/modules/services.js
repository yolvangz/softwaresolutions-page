export function getAllAnchors () {
	// Get All Services items
	const cardItems = document.querySelectorAll('#servicios .grid-item');
	cardItems.forEach(function(cardItem, index){
		// Get all links of each service
		var links = document.querySelectorAll('#service-' + (index) + ' .service-link');
		// On click open modal & set info
		for (var i = 0; i < links.length; i++) {
			links[i].dataset.serviceIndex = index;
			links[i].addEventListener('click', openModalService);
		}
	});
}
export function openModalService (event) {
	const serviceIndex = parseInt(event.target.dataset.serviceIndex);
	const modal = {
		name: [
			document.querySelector('#serviceModal .modal-title'),
			document.getElementById('serviceName')
		],
		category: document.getElementById('serviceCategory'),
		shortDescription: document.getElementById('serviceShortDescription'),
		detailedDescription: document.getElementById('serviceDescription'),
		price: document.getElementById('servicePrice'),
		image: document.getElementById('serviceImg')
	}
	window.alert('opened Service ' + serviceIndex);
}