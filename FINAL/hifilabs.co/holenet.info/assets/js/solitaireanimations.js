/****************************************************************************************
                 Script to create animations for the solitaire script
                  Written by Mark Wilton-Jones, 20/12/2005-8/1/2006
*****************************************************************************************

Please see http://www.howtocreate.co.uk/jslibs/ for details and a demo of this script
Please see http://www.howtocreate.co.uk/tutorials/jsexamples/solitaire.html for detailed instructions
Please see http://www.howtocreate.co.uk/jslibs/termsOfUse.html for terms of use
_____________________________________________________________________________________________________*/

var solitaireAnimations = {};

solitaireAnimations.randomAnimation = function (e) {
	// Randomly pick one of the animations or animation combinations
	var oRand = Math.random();
	if( oRand < ( 1 / 12 ) ) {
		solitaireAnimations.moveCircles(e);
		return;
	}
	var oFade, oShrink, oMove;
	while( !oFade && !oShrink && !oMove ) {
		oFade = ( Math.random() > 0.5 );
		oShrink = ( Math.random() > 0.5 );
		oMove = Math.floor( Math.random() * 2.9999 );
	}
	solitaireAnimations.doCardByCardHandling(e,oFade,oShrink,oMove);
};

solitaireAnimations.moveCircles = function (e) {
	// Move the cards around in an ellipse, and pull them out again, number by number
	var oCounter = 0;
	var theGame = e.target;
	var oIncrement = ( Math.PI * 2 ) / 52;
	var theInterval = setInterval(function () {
		oCounter++; // Must use whole numbers to avoid floating point errors
		var xFactor = theGame.usingCards.width * 3.5;
		var yFactor = theGame.usingCards.height * 1.55;
		for( var i = 0, oX, oY, oTmp, oTmpCounter; i < 52; i++ ) {
			oTmp = theGame.cards.playingCards[i].number * 10;
			if( oTmp < oCounter ) { continue; }
			if( oTmp == oCounter ) {
				theGame.cards.playingCards[i].autoPositionSolitaire();
				continue;
			}
			oTmpCounter = oCounter / 10;
			oX = Math.sin(oTmpCounter+(i*oIncrement)) + 1;
			oY = Math.cos(oTmpCounter+(i*oIncrement)) + 1;
			theGame.cards.playingCards[i].representation.style.left = Math.round(oX*xFactor) + 'px';
			theGame.cards.playingCards[i].representation.style.top = Math.round(oY*yFactor) + 'px';
		}
		if( oCounter > 140 ) {
			theGame.ondeal();
			if( confirm(theGame.strings.youWin) ) {
				theGame.startGame();
			}
		}
	},75);
	var oldDeal = theGame.ondeal, oldClick = theGame.workspace.onclick;
	theGame.ondeal = function () {
		// Stops the animation, and removes itself
		clearInterval( theInterval );
		theGame.ondeal = oldDeal;
		theGame.workspace.onclick = oldClick;
		return true;
	};
	theGame.workspace.onclick = function () {
		// Stops the animation, cleans up, and removes itself
		theGame.ondeal();
		for( var i = 0; i < 52; i++ ) {
			theGame.cards.playingCards[i].autoPositionSolitaire();
		}
		if( confirm(theGame.strings.youWin) ) {
			theGame.startGame();
		}
	};
	return false;
};

solitaireAnimations.fadeShrinkMove = function (oFade,oShrink,oMove) {
	// A wrapper for solitaireAnimations.doCardByCardHandling
	// Allows you to choose specific animation combinations, while still preserving the event handler syntax
	if( !( oFade || oShrink || oMove ) ) { return null; } // Bad call - return to normal handling
	return function (e) {
		// Scopes are so cool ;)
		return solitaireAnimations.doCardByCardHandling(e,oFade,oShrink,oMove);
	};
};

solitaireAnimations.doCardByCardHandling = function (e,oFade,oShrink,oMove) {
	// Run a combination of predefined animations
	// Do not call this function directly
	if( e.type != 'gamewon' ) { return true; }
	var theGame = e.target;
	if( !( oFade || oShrink || oMove ) ) { return confirm(theGame.strings.youWin); } // Shouldn't call this function like this, but just in case ...
	var cardStacks = e.target.cardStacks;
	var onStack = 2, onCard = 12, curVal = 0;
	var theInterval = setInterval(function () {

		// Step each card stack by stack, number by number - each card gets 4 steps - then it is set to display:none;
		if( curVal == 4 ) {
			cardStacks[onStack].cardsInStack[onCard].representation.style.display = 'none';
			curVal = 0;
			onStack++;
			if( onStack > 5 ) {
				onStack = 2;
				onCard--;
				if( onCard < 0 ) {
					clearInterval(theInterval);
					theGame.workspace.onclick = oldClick;
					if( confirm(theGame.strings.youWin) ) {
						theGame.ondeal();
						theGame.startGame();
					}
					return;
				}
			}
		}
		// Enable this for debugging
//		window.status = onStack +' '+ onCard +' '+ curVal;
		var tmpCard = cardStacks[onStack].cardsInStack[onCard];
		if( oFade ) {
			var tmpVal = ( ( 4 - curVal ) * 0.25 );
			tmpCard.representation.style.opacity = ''+tmpVal+'';
			tmpCard.representation.style.MozOpacity = ''+tmpVal+'';
			tmpCard.representation.style.filter = 'alpha(opacity='+(tmpVal*100)+')';
			if( tmpCard.representation.style.setProperty ) {
				// Safari 1.1
				try { tmpCard.representation.style.setProperty('-khtml-opacity',''+tmpVal+''); } catch(e) {}
			}
		}
		if( oShrink ) {
			var newHeight = Math.round( ( ( 4 - curVal ) / 4 ) * theGame.usingCards.height );
			var newWidth = Math.round( ( ( 4 - curVal ) / 4 ) * theGame.usingCards.width );
			tmpCard.representation.style.height = newHeight + 'px';
			tmpCard.representation.style.width = newWidth + 'px';
			tmpCard.cardImage.style.height = newHeight + 'px';
			tmpCard.cardImage.style.width = newWidth + 'px';
			tmpCard.representation.style.left = ( tmpCard.cardStack.leftPos + ( ( theGame.usingCards.width - newWidth ) / 2 ) ) + 'px';
		}
		if( oMove == 1 ) {
			if( oShrink ) {
				tmpCard.representation.style.top = Math.round( ( theGame.usingCards.height * ( curVal + 1 ) * 0.3 ) + ( ( theGame.usingCards.height - newHeight ) / 2 ) ) + 'px';
				tmpCard.representation.style.left = Math.round( tmpCard.cardStack.leftPos + ( ( theGame.usingCards.width - newWidth ) / 2 ) ) + 'px';
			} else {
				tmpCard.representation.style.top = Math.round( theGame.usingCards.height * ( curVal + 1 ) * 0.3 ) + 'px';
			}
		} else if( oShrink ) {
			tmpCard.representation.style.top = Math.round( ( theGame.usingCards.height / 10 ) + ( ( theGame.usingCards.height - newHeight ) / 2 ) ) + 'px';
		}
		if( oMove == 2 ) {
			tmpCard.representation.style.left = Math.round( tmpCard.cardStack.leftPos * ( ( 3 - curVal ) / 4 ) ) + 'px';
		}
		curVal++;

	},75);
	var oldDeal = theGame.ondeal, oldClick = theGame.workspace.onclick;
	theGame.ondeal = function () {
		// Resets the display of each card, stops the animation, and removes itself
		clearInterval( theInterval );
		for( var i = 0, tmpCard; i < 52; i++ ) {
			theGame.cards.playingCards[i].representation.style.display = 'block';
		}
		theGame.ondeal = oldDeal;
		theGame.workspace.onclick = oldClick;
		return true;
	};
	theGame.workspace.onclick = function () {
		// Stops the animation, cleans up, and removes itself
		theGame.ondeal();
		for( var i = 0; i < 52; i++ ) {
			theGame.cards.playingCards[i].autoPositionSolitaire();
			theGame.cards.setCardSize(theGame.usingCards.width+'px',theGame.usingCards.height+'px');
		}
		if( confirm(theGame.strings.youWin) ) {
			theGame.startGame();
		}
	};
	return false;
};
