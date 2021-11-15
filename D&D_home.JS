const zoomChoices = {
	zoom1: 1,
	zoom2: 2,
	zoom3: 3
};

window.addEventListener("DOMContentLoaded", (event) => {
	const items = [
		{
			imageUrl: "Pictures/SharaEldenriver.png",
			alt: "Shara Eldenriver",
			author: "Bryan Yee",
			description: "This is one of my D&D characters, Shara Eldenriver. She's a high elf who was originally a very powerful mage but lost her magic after an experiment gone wrong. Now she's an unhinged sword wielding barbarian."
		},
		{
			imageUrl: "Pictures/EoH/Illustration93.png",
			alt: "Escape from Happiness Main Character",
			author: "Bryan Yee",
			description: "This character doesn't have a name as they're meant to be a self insert for the player."
		},
        {
			imageUrl: "Pictures/Ito.png",
			alt: "Ito",
			author: "Bryan Yee",
			description: "This is one of my D&D characters, Ito.  They're an Owlfolk that travels across the world following the stars, using their mask inscripted with a map of the constellations."
		},
	]
	
	makeGalleries(items);
});

function makeGalleries(data) {
	const galleryContainer = document.querySelector('.gallery-container')

	const defaultGalleryItem = galleryContainer.removeChild(galleryContainer.firstElementChild);

	data.forEach(item => {
		const galleryItem = defaultGalleryItem.cloneNode(true);
	
		if (item.zoomRow && item.zoomRow !== 1)
			galleryItem.classList.add(`zoom-row-${item.zoomRow}`)

		if (item.zoomCol && item.zoomCol !== 1)
			galleryItem.classList.add(`zoom-col-${item.zoomCol}`)
		
		const link = galleryItem.querySelector('a');
		const img = galleryItem.querySelector('img');
		img.src = item.imageUrl;
		img.alt = item.alt;
		
		link.href += item.alt;
		link.addEventListener('click', e => {
			e.preventDefault();
			makeModalGallery(item)
		});

		galleryContainer.appendChild(galleryItem)
	})
}
	
function makeModalGallery(item) {
	const galleryModal = document.querySelector('.gallery-modal');
	const img = galleryModal.querySelector('img');
	galleryModal.querySelector('.gallery-author	span:nth-child(2)').innerText = item.author;
	galleryModal.querySelector('.gallery-description span:nth-child(2)').innerText = item.description;
	img.src = item.imageUrl;
	img.alt = item.alt;
	galleryModal.classList.add('active');
	galleryModal.addEventListener('click', e => {
		galleryModal.classList.remove('active');
	})
	galleryModal.querySelector('.gallery-details').addEventListener('click', e => {
		e.stopPropagation(); 
	})
}
