let wins = 0;
let losses = 0;

function playRound(p_1, p_2) {
	const hands = new Map([
		["rock", 0],
		["paper", 1],
		["scissors", 2]]
		);
	p_1 = p_1.toLowerCase();
	p_2 = p_2.toLowerCase();
	let formatted_p1 = p_1.replace(p_1[0], p_1[0].toUpperCase());
	let formatted_p2 = p_2.replace(p_2[0], p_2[0].toUpperCase());
	const hand_1 = hands.get(p_1);
	const losing_hand = (hand_1 + 1) % 3;
	const hand_2 = hands.get(p_2);
	let output = "";
	if (hand_1 === hand_2) {
		output = "Tie! Both players drew " + formatted_p1 + ".";
	} else if (losing_hand === hand_2) {
		output = "You Lose! " + formatted_p2 + " beats " + formatted_p1 + ".";
		losses++;
	} else {
		output = "You Win! " + formatted_p1 + " beats " + formatted_p2 + ".";
		wins++;
	}	
	return output;
}

function compChoice() {
	const hands = ["rock", "paper", "scissors"];
	return hands[Math.floor(Math.random() * 3)];
}

function game(e) {
	let outcome = playRound(e.srcElement.className, compChoice());
	const text_out = document.querySelector(".outcome");
	if (wins === 5) {
		text_out.textContent = "You are the champion! Congratulations!";
		wins = 0;
		losses = 0;
	} else if (losses === 5) {
		text_out.textContent = "You have been defeated!";
		wins = 0;
		losses = 0;
	} else {
		text_out.textContent = outcome + " You have won " + wins + " games and lost " + losses + " games.";
	}	
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener('click', game);
});
