console.log(data);

function renderCard(songData) {
	const div = document.createElement('div')
	div.className = 'card'

	const h3 = document.createElement('h3')
	h3.innerText = songData.title
	let spanArtist = document.createElement('span')
	spanArtist.innerText = songData.artist
	let spanAlbum = document.createElement('span')
	spanAlbum.innerText = songData.album
	let spanRelease = document.createElement('span')
	spanRelease.innerText = songData.release
	let spanGenre = document.createElement('span')
	spanGenre.innerText = songData.genre
	div.append(h3, spanArtist, spanAlbum, spanRelease, spanGenre)
	return div
	// skapa div.card
	// skapa h3 och span-element
	// fylla elementen med data
	// lägga till elementen i div.card
	// returnera div.card
}

let card1 = renderCard(data[0])
console.log('Card 1:', card1);

const mainGrid = document.querySelector('main')
mainGrid.append(card1)

// Att göra: rendera alla objekt i data-listan
// Helst med hjälp av map, filter och forEach


//
