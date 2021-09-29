const zoomChoices = {
	zoom1: 1,
	zoom2: 2,
	zoom3: 3
};

window.addEventListener("DOMContentLoaded", (event) => {
	const items = [
		{
			imageUrl: "Pictures/EoH/The_power_of_Happiness_TITLE.png",
			alt: "The Power of Happiness",
			author: "Bryan Yee",
			description: "This was the cover art for our game mock-up Escape of Happiness"
		},
		{
			imageUrl: "Pictures/EoH/Illustration93.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "Pictures/Concept_Art/Illustration61.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "Pictures/Animated/rotoscopehbjnkm.gif",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "Illustration104.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "jghjyggjhhkgjbkbjkkjbkbj.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "adfgsdgdadfsghd.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "jyggkhkgjgyjyfjyif.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
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
