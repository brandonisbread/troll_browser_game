// JavaScript Battle Game Project

// Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

// Definition of the startBattle() function which begins the game
function startBattle() {
	// Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent ="";

	// Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("You're walking through the forest and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nWill you BRIBE the troll?\n\nPlease enter your response below:").toUpperCase();

	// Switch statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		} // end of case FIGHT

		case "RUN": {
			runBattle();
			break;
		} // end of case RUN

		case "BRIBE": {
			bribeBattle();
			break;
		} // end of case BRIBE

		default: {
			window.alert("You entered: " + action + ". That is not a valid choice! Please try again!");
			startBattle();
		} // end of default case
	} // End of switch statement

} // end of startBattle()

// Definition of the fightBattle() function
function fightBattle() {
	// Start by collecting some user responses
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a troll? (YES or NO").toUpperCase();

	// Logic that analyzes the responses and creates the outcomes
	if(skill === "YES" || strong === "YES") {
		// The user said YES to at least one prompt
		document.getElementById("victory").innerHTML = "Greater strength or skill has won the day!<br/>You have survived!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?"
	} else {
		// The user didn't answer YES to both questions
		document.getElementById("defeat").innerHTML = "You aren't skilled or strong?<br/>You have been defeated!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
}// end of fightBattle()

// Definition of the runBattle()function
function runBattle() {
	// Collect the user input, test it for NULL then turn it upper case
	let fast = window.prompt("Are you fast? (YES or NO)");
 
	if(fast != null) {
		fast = fast.toUpperCase();
	} else {
		window.alert("Please type something! :)")
		runBattle();
		return;
	}

	// Now that we know we have something input, analyze the variable to determine the outcome
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you! <br/>But, can you love with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You tried to run when you aren't fast?<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
} // end of run battle

// Definition of the bribeBattle() function
function bribeBattle() {
	// Variable to store the user input
	let money = window.prompt("You have to pay the troll-toll\nDo you have any money? (YES or NO)").toUpperCase();

	// Check the reponse of YES / NO
	if(money === "YES") {
		//  User said they have money, now ask for the amount
		let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE!");
		// Nested if statment to check the amount
		if(amount > 50) {
			// User has the correct amount
			document.getElementById("victory").innerHTML = "Great job! The troll is happy!<br/>You may pass!"
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Try Again?";
		} else {
			document.getElementById("defeat").innerHTML = "The troll needs more than that!<br/>Your fate is sealed!"
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?";
		} // end of nested if/else
	} else {
		// User said they had no money
			document.getElementById("defeat").innerHTML = "No money? What were you planning to bribe with? <br/>You have lost!"
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?";
	}
}