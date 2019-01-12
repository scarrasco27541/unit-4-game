//// These are values we're going to track throughout
    var targetNumber = 0;	// This is our targetNumber and will reset each round
    var counter = 0;	// This is the number that we want to match that targetNumber each round
	var wins = 0;	// This tracks how many wins (increments consistently, never reset)
	var losses = 0;	// This tracks how many losses (increments consistently, never reset)

//// This function gives us a neater way to get a random int from x to y without
//// having to write that Math.floor(...etc...) crap all the time
//// This function lets you pick a random number between some integer and some other integer
    function generateRandIntRange(from, to) {	// I picked this function name
		// Use a return value on functions that you want an answer from
		return from + Math.floor(Math.random() * ((to+1)-from)); // one-line function definition
    }


    function startRound() {
        console.clear();	// just for debugging: clears the console (nothing to do with the game)
        counter = 0;  // set the counter back to zero because we're starting a new game
		//// Now we want to pick a new targetNumber to hit in this new game
//		targetNumber = 19 + Math.floor(Math.random() * 101);	// rand between 19 and 120
        targetNumber = generateRandIntRange(19,120);  // number we want to hit exactly
		//// .each function on an array in jQuery lets you perform some function for each element
		//// and specifically considers "this" in its scope to each element as it loops through
        $(".crystal-image").each(function() {
//			this.value = 1 + Math.floor(Math.random() * 11);	// rand between 1 and 12
            this.value = generateRandIntRange(1,12);
        });
		updateView();
	} 
	
	function updateView() {
		//// Here were just updating our html/dom elements with the corresponding variable values
        $('#wins').text(wins);	// <-- use this instead (jquery version)
        $('#losses').text(losses); // displaying the correct number of wins and losses
		$("#target").text(targetNumber);
        $('#counter').text(counter); // display that updated counter number in the #counter space in the html	
    }

    function lose() {
		losses++;	// increment number of losses by 1
        alert("You lose. :(");	// make them feel bad about themselves
        startRound();	// start a new round by calling our function above
    }

    function win() {
		wins++;	// increment number of losses by 1
        alert("You win! :)");	// congratulate them
        startRound();	// start a new round by calling our function above
    }

	function clickCrystal() {
		// in this function, 'this' will refer to the thing that clicked to call this function in the first place
		// in other words, 'this' is the crystal we clicked
		// take that random value that we had gotten that particular crystal and add it to our counter:
		counter  = counter + this.value;
		// now we've updated a value in our variables, so let's update the view to reflect it:
		updateView();
		// Let's check if we won, lost, or neither:
		if (counter > targetNumber) {
			// If our counter is GREATER than our targetNumber, then we lost
			lose();
		} else if (counter == targetNumber) {
			// If our counter is EQUAL TO our targetNumber, then we won
			win();
		}
		// otherwise nothing happened and we just keep on a-clickin'
	}

    $(window).on("load", function() {
		// When the window first loads, we want to do two things:
		// 1. call our 'startRound' function to randomize some things and fill in our page view
        startRound();	// start a new round by calling our function above
		// 2. add a generic listener to call the 'clickCrystal' function on each crystal-image
		// add an event listener in the format .on(listenForThisEvent, doThisFunctionToTheThingClicked)
        $(".crystal-image").on("click", clickCrystal);
    });
	
	
	
