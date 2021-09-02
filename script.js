console.log(data);

function renderCard(songData) {
	const div = document.createElement('div')
	div.className = 'card'

	const h3Wrapper = document.createElement('div')
	const h3 = document.createElement('h3')
	h3.innerText = songData.title
	h3Wrapper.append(h3)
	let input = document.createElement('input')

// display: none / block / inline
// opacity: 0 / 1
	h3.addEventListener('click', event => {
		input.value = h3.innerText
		h3Wrapper.innerHTML = ''
		h3Wrapper.append(input)
	})
	input.addEventListener('blur', event => {
		songData.title = event.target.value
		h3Wrapper.innerHTML = ''
		h3.innerText = songData.title
		h3Wrapper.append(h3)
	})

	let spanArtist = document.createElement('span')
	spanArtist.innerText = songData.artist
	let spanAlbum = document.createElement('span')
	spanAlbum.innerText = songData.album
	let spanRelease = document.createElement('span')
	spanRelease.innerText = songData.release
	let spanGenre = document.createElement('span')
	spanGenre.innerText = songData.genre
	div.append(h3Wrapper, spanArtist, spanAlbum, spanRelease, spanGenre)
	return div
	// skapa div.card
	// skapa h3 och span-element
	// fylla elementen med data
	// lägga till elementen i div.card
	// returnera div.card
}

const mainGrid = document.querySelector('main')

data.forEach(song => {
	let card = renderCard(song)
	mainGrid.append(card)
})
// data.map(song => renderCard(song)).forEach(divCard => mainGrid.append(divCard))






//
