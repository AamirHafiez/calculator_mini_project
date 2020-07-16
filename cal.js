var op1 = 0;
var op2 = null;
var oprator = null;

var button = document.querySelectorAll('.button');

var isOperatorInUse = false;

for(var i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(){
		var but = this.getAttribute('data-value');
		var isInfinity = false;
		if(calText.textContent.toLowerCase() === 'infinity'){
			isInfinity = true;
		}
		if(but === 'AC'){
			op1 = 0;
			op2 = null;
			operator = null;
			calText.innerText = "0";
			isOperatorInUse = false;
		}
		else if(but === '+/-' && !isInfinity){
			var dis = calText.textContent;
			if(dis[0] === '-'){
				dis = dis.slice(1);
			}else{
				dis = '-' + dis;
			}
			calText.innerText = dis;
		}
		else if (but == '%' && !isInfinity && !isOperatorInUse) {
			var dis = calText.innerText;
			calText.innerText = dis + '%';
			isOperatorInUse = true;
		}
		else if (but == '=' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = eval(dis);
			isOperatorInUse = false;
		}
		else if (but == '1' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '1';
			}else{
				calText.innerText = dis + '1'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '2' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '2';
			}else{
				calText.innerText = dis + '2'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '3' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '3';
			}else{
				calText.innerText = dis + '3'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '4' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '4';
			}else{
				calText.innerText = dis + '4'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '5' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '5';
			}else{
				calText.innerText = dis + '5'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '6' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '6';
			}else{
				calText.innerText = dis + '6'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '7' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '7';
			}else{
				calText.innerText = dis + '7'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '8' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '8';
			}else{
				calText.innerText = dis + '8'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '9' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '9';
			}else{
				calText.innerText = dis + '9'; 
			}
			isOperatorInUse = false;
		}
		else if (but == '0' && !isInfinity) {
			var dis = calText.textContent;
			if(dis !== '0'){
				calText.innerText = dis + '0';
			}
			isOperatorInUse = false;
		}
		else if (but == '/' && !isInfinity && !isOperatorInUse) {
			var dis = calText.textContent;
			calText.innerText = dis + '/'; 
			isOperatorInUse = true;
		}
		else if (but == '*' && !isInfinity && !isOperatorInUse) {
			var dis = calText.innerText;
			calText.innerText = dis + '*';
			isOperatorInUse = true;
		}
		else if (but == '+' && !isInfinity && !isOperatorInUse) {
			var dis = calText.innerText;
			calText.innerText = dis + '+';
			isOperatorInUse = true;
		}
		else if (but == '-' && !isInfinity && !isOperatorInUse) {
			var dis = calText.innerText;
			calText.innerText = dis + '-';
			isOperatorInUse = true;
		}
		else if (but == '.' && !isInfinity) {
			var dis = calText.textContent;
			var lastOperand = '';
			for (var i = dis.length; i >= 0 ; i--) {
				if(dis[i] === '+' || dis[i] === '-' || dis[i] === '*' || dis[i] === '/' || dis[i] === '%'){
					break;
				}
				lastOperand = dis[i] + lastOperand;
			}
			if(lastOperand.toString().indexOf('.') == -1){
				calText.innerText = dis + '.';
			}
			isOperatorInUse = false;
		}
	});
}