var op1 = 0;
var op2 = null;
var oprator = null;

var button = document.querySelectorAll('.button');

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
		}
		else if(but === '+/-' && !isInfinity){
			var dis = parseFloat(calText.textContent);
			dis = - dis;
			calText.innerText = dis;
		}
		else if (but == '%' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = dis + '%';
		}
		else if (but == '=' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = eval(dis);
		}
		else if (but == '1' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '1';
			}else{
				calText.innerText = dis + '1'; 
			}
		}
		else if (but == '2' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '2';
			}else{
				calText.innerText = dis + '2'; 
			}
		}
		else if (but == '3' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '3';
			}else{
				calText.innerText = dis + '3'; 
			}
		}
		else if (but == '4' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '4';
			}else{
				calText.innerText = dis + '4'; 
			}
		}
		else if (but == '5' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '5';
			}else{
				calText.innerText = dis + '5'; 
			}
		}
		else if (but == '6' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '6';
			}else{
				calText.innerText = dis + '6'; 
			}
		}
		else if (but == '7' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '7';
			}else{
				calText.innerText = dis + '7'; 
			}
		}
		else if (but == '8' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '8';
			}else{
				calText.innerText = dis + '8'; 
			}
		}
		else if (but == '9' && !isInfinity) {
			var dis = calText.textContent;
			if(dis === '0'){
				calText.innerText = '9';
			}else{
				calText.innerText = dis + '9'; 
			}
		}
		else if (but == '0' && !isInfinity) {
			var dis = calText.textContent;
			if(dis !== '0'){
				calText.innerText = dis + '0';
			}
		}
		else if (but == '/' && !isInfinity) {
			var dis = calText.textContent;
			calText.innerText = dis + '/'; 
		}
		else if (but == '*' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = dis + '*';
		}
		else if (but == '+' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = dis + '+';
		}
		else if (but == '-' && !isInfinity) {
			var dis = calText.innerText;
			calText.innerText = dis + '-';
		}
		else if (but == '.' && !isInfinity) {
			var dis = calText.textContent;
			if(dis.toString().indexOf('.') == -1){
				calText.innerText = dis + '.';
			}
		}
	});
}