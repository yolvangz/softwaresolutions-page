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
	//Clearing services
	const servicesInfo = window.services;
	delete window.services;
	// Get index service of parent
	const serviceIndex = parseInt(event.target.dataset.serviceIndex);
	sendInfoToModal(servicesInfo[serviceIndex]);
}
function sendInfoToModal(service){
	// Get Modal DOM model
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
	console.log(service);
}