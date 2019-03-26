
const getInput = () => {
	return document.getElementById('input').innerText;
}

const printInput = input => {
	document.getElementById('input').innerText = input;
}

const getOutput = () => {
	return document.getElementById('output').innerText;
}

const printOutput = output => {
	let outputHTML = document.getElementById('output');
	outputHTML.innerText = output == "" ? output : getFormattedNumber(output)
}

const getFormattedNumber = string => {
	if (string == "-") {
		return ""
	}
	let n = Number(string);
	return n.toLocaleString('en');
}

const reverseFormattedNumber = string => {
	return Number(string.replace(/,/g, ''))
}

const operator = document.getElementsByClassName('operator');

for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function(){
		if (this.id == "clear") {
			printOutput('');
			printInput('');
		} else if (this.id == 'backspace') {
			let output = reverseFormattedNumber(getOutput()).toString();
			if (output) {
				output = output.substr(0, output.length - 1);
				printOutput(output);
			}
		} else {
			let output = getOutput();
			let input = getInput();
			if (output == '' && input != '') {
				if (isNaN(input[input.length - 1])) {
					input = input.substr(0, input.length - 1)
				}
			}
			if (output != '' || input != '') {
				output = output == '' ? output : reverseFormattedNumber(output);
				input = input + output;
				if (this.id == '=') {
					let result = eval(input);
					printOutput(result);
					printInput('');
				} else {
					input = input + this.id;
					printInput(input);
					printOutput('');
				}
			}
		}
	})
}

const number = document.getElementsByClassName('number-btn');

for (let i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function(){
		let output = reverseFormattedNumber(getOutput());
		if (output != NaN) {
			output = output + this.id;
			printOutput(output);
		}
	})
}

