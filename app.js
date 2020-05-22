function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

let character = document.querySelector('#player');
let coin = document.querySelector('#coin');

// Adding event listener to window because, we want to track the event in whole page
// if it occurs not in just one particular element

window.addEventListener('keyup' , function( event ) {
	switch( event.key ) {
		case 'ArrowUp':
		 	// character.style.top gives blank because it
		 	// gets the style from inline where we haven't
		 	// specified any - so it's giving blank.

		 	// It's top so character should suppose to go upward
		 	// not downwards subracting instead of adding
		 	// don't want the case of inverted controls.
			let currentTop = getPosition( character.style.top );
			// if ( currentTop <= window.innerWidth )
				character.style.top = `${currentTop - 55}px`;
			break;
		case 'ArrowDown':
			let currentDown = getPosition( character.style.top );
			character.style.top = `${currentDown + 55}px`;
			break;
		case 'ArrowRight':
			let currentRight = getPosition( character.style.left );
			character.style.left = `${currentRight + 50}px`;
			break;		
		case 'ArrowLeft':
			let currentLeft = getPosition( character.style.left );
			character.style.left = `${currentLeft - 50}px`;
			break;				
	}
})

const getPosition = ( position ) => {
	// slice, slices the number of characters specified in the length
	// if specified in positive integer it will include that number of characters
	// in negative integers case it will slice the last characters of specified string.
	// 'tamir'.slice( 0 , 2 ) = ta - 'tamir'.slice( 0 , -2 ) = tam

	// Solution for blank inline style
	if( !position )
			return 100; // Returning 100 because original top and left matches with it

	// Position is in string need to convert it into int
	return parseInt(position.slice( 0 , -2));
}
