function numeros (){
	var a = parseInt(prompt("dame un número"));
	var b = parseInt(prompt("dame otro número"));
	if (a>b){
		document.write("el número" + a + " es mayor")
	}
	else{
		document.write("el número" + b + " es mayor")
	}
}
numeros();