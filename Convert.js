"use strict";

const decimal = 10;
const hexadecimal = 16;
const binary = 2;

class Num {
	//base = number, digits = string
	constructor(base=10, digits='0') {
		this._base = Number(base);
		this._digits = String(digits);
	}
	//get set
	get base() { return this._base; }
	get digits() { return this._digits; }
	set base(b) { this._base = b; }
	set digits(d) { this._digits = d; }
	//methods
	/*
	convert(new_base) {
		if(this.base == new_base) {
			return this.digits;
		} else {
			if(this.base == decimal) {
				
			}
		}
	}
	*/
}

//returns actual integer value of a digit, e.g A = 10, F = 15
//we assume maximum is base 16
//digit is assumed to be a string (char)
function toNumValue(digit) {
	switch (digit) {
		case 'A':
			return '10';
			break;
		case 'B':
			return '11';
			break;
		case 'C':
			return '12';
			break;
		case 'D':
			return '13';
			break;
		case 'E':
			return '14';
			break;
		case 'F':
			return '15';
			break;
	}
	return digit;
}

function toDigitValue(n) {
	switch (n) {
		case 10:
			return 'A';
			break;
		case 11:
			return 'B';
			break;
		case 12:
			return 'C';
			break;
		case 13:
			return 'D';
			break;
		case 14:
			return 'E';
			break;
		case 15:
			return 'F';
			break;
	}
	return String(n);
}

function toDecimal(num) {
	try {
		// checks to make sure input is a Num
		if (!(num instanceof Num)) throw "Incorrect type given. Expected: Num";

		//converts
		let res = 0;
		for (let i = 0; i < num.digits.length; ++i ) {
			//            base ^ Right-Most-Digit-index * Right-Most-Digit
			res = res + (num.base ** i) * toNumValue(num.digits.charAt(num.digits.length - (i + 1))); 
			console.log(`sum at digit [${i+1}]: ${res}, digit: ${num.digits.charAt(num.digits.length - (i + 1))}`)
		}
		return res;
	}
	catch (err) {
		console.log(err);
	}
}

function toBase(b,num) {
	try {
		// checks to make sure input is a Num, and b is a integer
		if (!(num instanceof Num)) throw "Incorrect type given. Expected: Num";
		if (typeof(b) !== 'number' || (b % 1 !== 0)) throw "Incorrect type given. Expected: integer";
		if (b <= 1 || b > 16) throw "Invalid base range";

		//convert num to base 10 first
		let q = toDecimal(num); //quotient
		let r = 0; //remainder
		let res = '';
		while(true) {
			console.log(`${q} ..${r}`);
			r = q % b; 
			q =  Math.floor(q/b);
			res = toDigitValue(r) + res; //concats r onto res
			if(q <= 0) break;
		}
		return res;
	}
	catch (err) {
		console.log(err);
	}
}

document.getElementById("eval").onclick = addAndEval;
function addAndEval() {
	let num = new Num(Number(document.getElementById("base-from").value), document.getElementById("digits").value);
	document.getElementById("output").innerHTML = toBase(Number(document.getElementById("base-to").value),num);
}
