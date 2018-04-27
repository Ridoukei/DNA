
var dAMP = 331.2,dTMP = 322.2,dGMP = 347.2,dCMP = 307.2;
var A = 0,T = 0,G = 0,C = 0;
var input = document.querySelector('textarea');
var result = document.querySelector('#result');
var cal = document.querySelector('#cal');
// var res = document.querySelector('#res');

// res.onclick = function(){
// 	var sequence = input.textContent;
// 	sequence = null;
// }

cal.onclick = function(){
	var sequence = input.value;
	A = 0;T = 0;G = 0;C = 0;
	for (var i = 0; i < sequence.length; i++) {
		if (sequence[i] == 'a' || sequence[i] == 'A'){
			A++;
		}else if (sequence[i] == 'T' || sequence[i] == 't') {
			T++;
		}else if (sequence[i] == 'G' || sequence[i] == 'g') {
			G++;
		}else if (sequence[i] == 'C' || sequence[i] == 'c') {
			C++;
		}else {
							
		}

	}
	result.textContent = "= " + A*dAMP + T*dTMP + G*dGMP + C*dCMP + " Dalton"
}