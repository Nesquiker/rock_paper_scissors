

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
	} else {
	let output = "You Win! " + formatted_p1 + " beats " + formatted_p2 + ".";
	}	
	return output;
}

function compChoice() {
	const hands = ["rock", "paper", "scissors"];
	return hands[Math.floor(Math.random() * 3)];
}

function playerChoice() {
	return prompt("Please enter your hand: rock / paper / scissors  | If none chosen a random choice will be made", compChoice());
}
	

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerChoice(), compChoice()));
	}
}
