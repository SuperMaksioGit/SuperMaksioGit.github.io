let answer;
let answerNumber = 0;

function factor(square){
		let isFind = false;
		square = Math.ceil(square/5)*5;
		while (isFind == false){
	    let i = Math.floor(Math.random() * square) + 2;
		for (let x = 2; x < square; x++) {
			if (i*x == square){
				isFind = true;
				return [i,x,square];
		    } else if (i == square){
				isFind = true;
				return false;
			}
}
}
}
function random(from,to){
	return Math.floor(Math.random() * (to - from + 1)) + from;
}
function changeNumbers(from, to){
	let numbera = document.getElementById("numbera");
	let numberc = document.getElementById("numberc");
	let factorResult = false;
	while (factorResult == false){
	factorResult = factor(random(from, to))
	}
	numbera.innerHTML = `${factorResult[0]}`
	numberc.innerHTML = `${factorResult[2]}`
	
	answer = factorResult[1];

}
function validateNumbers(){
	answerNumber ++;
	let numberb = document.getElementById("numberb");
	let result = document.getElementById("result");
	if (numberb.value == answer){
		result.innerHTML = `[${answerNumber}: Good]`
		result.style.color = "green";
	} else {
		result.innerHTML = `[${answerNumber}: Bad]`
		result.style.color = "red";
	}
	numberb.value = "";
	changeNumbers(2,250);
}

changeNumbers(2,250);
