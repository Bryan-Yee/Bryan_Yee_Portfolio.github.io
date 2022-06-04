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
			imageUrl: "Pictures/Concept_Art/Ice Desert 2.PNG",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
        {
			imageUrl: "Pictures/Concept_Art/PartyImpass.png",
			alt: "image2",
			author: "Bryan Yee",
			description: "TESTING TESTING TESTING HOPEFULLY THIS WORKS IDK WHAT I'LL DO IF THIS DOESN'T PROBABLY CRY AND GIVE UP."
		},
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
        {
			imageUrl: "Pictures/Ta Shivan.PNG",
			alt: "Ito",
			author: "Bryan Yee",
			description: "This is one of my Dungeons & Destiny characters, Ta Shivan. She's from a far flung future, where she happened upon a TTRPG book and took it as real magic. Using her inert magics as if she was a witch. She's has a knack for trinkets and collects whatever she thinks will help her cast her spells. She is also proficient in rocket launchers :D"
		}

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
