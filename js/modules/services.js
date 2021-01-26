import * as request from './request.js';

/* 
	It makes JSON request & send an addEventListener
	to each anchor in services, with a data-serviceIndex attribute
*/
export function getAllAnchors () {
	// Make JSON request
	request.requestServicesInfo();
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
/*
	It get the JSON info from global constant,
	get the service index from data attribute,
	send it to sendInfoToModal function &
	open the modal
*/
function openModalService (event) {
	//Clearing services
	const servicesInfo = window.services;
	// Get index service of parent
	const serviceIndex = parseInt(event.target.dataset.serviceIndex);
	sendInfoToModal(servicesInfo[serviceIndex]);
	// Toggle modal
	$('#serviceModal').modal('show');
}
/*
	It push all the service information into the modal dialog window
*/
function sendInfoToModal(service){
	// Get Modal DOM model
	const modal = {
		name: [
			// document.getElementById('serviceName'),
			document.querySelector('#serviceModal .modal-title')
		],
		category: document.getElementById('serviceCategory'),
		shortDescription: document.getElementById('serviceShortDescription'),
		detailedDescription: document.getElementById('serviceDescription'),
		price: document.getElementById('servicePrice'),
		image: document.getElementById('serviceImg')
	}
	for (var property in modal){
		switch (property){
			case 'name':
				for (var i = 0; i < modal[property].length; i++) {
					console.log(modal[property][i]);
					modal[property][i].innerHTML = service[property];
				}
				break;
			case 'image':
				insertImage(modal[property], service[property]);
				break;
			case 'category':
				insertBadge(modal[property], service[property]);
				break;
			case 'price':
				insertPrice(modal[property], service[property]);
				break;
			default:
				modal[property].innerHTML = service[property];
		}
	}
}

// Push image parametter to tag
function insertImage(tag, info){
	tag.src = info.source;
	tag.alt = info.name;
}
// Push a sequence of badges tags into a parent tag
function insertBadge(parentTag, info){
	parentTag.innerHTML = "";
	const badgeTag = {
		open: '<span class="badge badge-primary mr-1">',
		close: '</span>'
	}
	info.forEach(function(value){
		parentTag.innerHTML += badgeTag.open + value + badgeTag.close;
	});
}
// Push a custom price expression into a tag
function insertPrice(tag, info){
	switch (info.type){
		case 'fixed':
			tag.innerHTML = '$' + info.value;
			break;
		case 'from':
			tag.innerHTML = 'Desde $' + info.value;
			break;
		case 'to':
			tag.innerHTML = 'Hasta $' + info.value;
			break;
		case 'hour':
			tag.innerHTML = '$' + info.value + ' por hora'
		case 'variable':
			tag.innerHTML = 'Acorde al trabajo';
			break;
	}
}