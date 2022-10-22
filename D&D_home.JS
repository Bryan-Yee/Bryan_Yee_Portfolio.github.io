const zoomChoices = {
	zoom1: 1,
	zoom2: 2,
	zoom3: 3
};

window.addEventListener("DOMContentLoaded", (event) => {
	const items = [
		{
			imageUrl: "Pictures/EoH/EoH enemy concepts.png",
			alt: "Enemy Concept Art",
			author: " ",
			description: "This was a concept drawing of various enemies you would face."
		},
		{
			imageUrl: "Pictures/EoH/Illustration93.png",
			alt: "Escape from Happiness Main Character",
			author: " ",
			description: "First pass of the Main Character"
		},
        {
			imageUrl: "Pictures/EoH/EoH MCconcept art.png",
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Player_Corrupt.gif",
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},        
		{
			imageUrl: "Pictures/EoH/mock-export.png" ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},        
		{
			imageUrl:"Pictures/EoH/Battle_Menu(B)_2(224x128).png"  ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},        
		{
			imageUrl: "Pictures/EoH/Drill_Warrior(TANK)_Isometric.gif" ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Tileset_Happiness(288x352).png"  ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/EnemyBOSSSprite (still)4.gif"  ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/PC_BattleUI all.gif"  ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Player Death animation-export.gif",
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Player Death animation6-export.gif" ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Player_Wake_Up2test-export.gif" ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
		},
		{
			imageUrl: "Pictures/EoH/Player_Wake_Up 3-export.gif" ,
			alt: "Escape of Happiness Concept Art",
			author: " ",
			description: "Final concept of the Main Character."
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
