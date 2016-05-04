function langosta (){
	var a = parseInt(prompt("cantidad de personas"));
	if ( a <= 200){
		var total = 0;
		total = a*95;
		document.write("tu presupuesto es " + total);
	}
	else if (a > 200 && a <= 300){
		var total = 0;
		total = a*85;
		document.write("tu presupuesto es " + total);
	}
	else if (a > 300){
		var total = 0;
		total = a*75;
		document.write("tu presupuesto es " + total);
	}
}

langosta();