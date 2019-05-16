use strict;

const decimal = 10;
const hex = 16;
const binary = 2;

class Num {
	// fields
	base = 10;
	digits = '';

	//cons
	constructor(base, digits) {
		this.base = base;
		this.digits = digits;
	}
	//get
	get base() { return this.base; }
	get digits() { return this.digits; }
	//set 
	set base(b) {
		this.base = b;
	}
	set digits(d) {
		this.digits = d;
	}
	//methods
	convert(new_base) {
		if(this.base == new_base) {
			return this.digits;
		} else {
			if(this.base == decimal) {
				
			}
		}
	}
}