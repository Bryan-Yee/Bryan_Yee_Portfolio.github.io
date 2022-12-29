const zoomChoices = {
	zoom1: 1,
	zoom2: 2,
	zoom3: 3
};

window.addEventListener("DOMContentLoaded", (event) => {
	const items = [
        {
			imageUrl: "Pictures/DrinkRun/BAR_BACKGROUND.png",
			alt: "Drink Run Concept Art",
			author: " ",
			description: "background for the bar"
		},
		{
			imageUrl: "Pictures/DrinkRun/INDOOR_EXAMPLE.png",
			alt: "Drink Run Concept Art",
			author: " ",
			description: "indoor backgrounds"
		},        
        {
			imageUrl: "Pictures/DrinkRun/EXAMPLE.png",
			alt: "Drink Run Concept Art",
			author: " ",
			description: "Outdoor background"
		},  
        {
			imageUrl: "Pictures/Concept_Art/Main_Character_Concept_Art.png",
			alt: " Main Character Art",
			author: " ",
			description: "This was a few designs we tried for the Main Character.  We settled on (A)"
		},      
		{
			imageUrl: "Pictures/DrinkRun/MC_CONCEPT_1_big.png" ,
			alt: "Drink Run Concept Art",
			author: " ",
			description: "Final design of the sprite"
		},
        {
			imageUrl: "Pictures/DrinkRun/MC_IDLE_TEST48x48wip.gif",
			alt: "Drink Run Concept Art",
			author: " ",
			description: "Test idle animation"
		},    
        {
			imageUrl: "Pictures/DrinkRun/Jump_Animation.gif" ,
			alt: "Drink Run Concept Art",
			author: " ",
			description: "Test jumping animation"
		},  
        {
			imageUrl: "Pictures/DrinkRun/enemy_concepts.png",
			alt: "Drink Run Main Character",
			author: " ",
			description: "First pass of the Main Character"
		},  
		{
			imageUrl:"Pictures/DrinkRun/enemy-droneBIG.gif"  ,
			alt: "Drink Run Concept Art",
			author: " ",
			description: "Enemy Finished Sprite"
		},        
		{
			imageUrl: "Pictures/DrinkRun/enemy-patrol-groundbigidle.gif"  ,
			alt: "Drink Run Ground Idle",
			author: " ",
			description: "Enemy Finished Sprite"
		},
        {
			imageUrl: "Pictures/DrinkRun/enemy-heavy-flyingbig.gif"  ,
			alt: "Drink Run Heavy Enemy",
			author: " ",
			description: "Enemy Finished Sprite"
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
