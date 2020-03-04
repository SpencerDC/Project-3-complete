var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randGen() {
	return Math.floor(Math.random() * 26)
}

function sentence() {
	var rand1 = Math.floor(Math.random() * 26);

var content = "The letter is " + letter[rand1] + ".";

document.getElementById('sentence').innerHTML = content;
};

sentence();
