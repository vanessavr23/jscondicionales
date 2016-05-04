function viaje(){
	var a = parseInt(prompt("cantidad de alumnos"));
	if (a >= 100){
		var total = 0;
		total = (a*65);
		document.write("el precio es : " + total);
	}
	else if(a <=99 && a >50){
		var total = 0;
		total = (a*70);
		document.write("el precio es : " + total);
	}
	else if(a <=49 && a>30){
		var total = 0;
		total = (a*95);
		document.write("el precio es : " + total);
	}
	else if(a<30){
		var total = 0;
		total = 4000;
		var total1 =0;
		total1 = (4000/30).toFixed(2)
		document.write("el precio es : " + total + " cada alumno pagará " + total1);
	}
}

viaje();