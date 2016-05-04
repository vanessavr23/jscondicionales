function autobus(){
	var a = parseInt (prompt("cuanto recorrerás?"));
	if (a < 10){
		var total = 0;
		total = (a * 2);
		document.write("total a pagar" + total);
	}
	else if (a > 10 && a < 30){
		var total = 0;
		total = (a * 2.5);
		document.write("total a pagar" + total);
	}
	else if (a > 30){
		var total = 0;
		total = (a * 3);
		document.write("total a pagar" + total);
	}

}
autobus();