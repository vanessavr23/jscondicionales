function descuento(){
	var p = parseInt(prompt("precio de traje"));
	if(p >= 2500){
		var total = 0;
		total = (p*0.15);
		document.write("el precio con tu descuento es : " + (p-total));
	}
	else{
		var total = 0;
		total = (p*0.8);
		document.write("el precio con tu descuento es : " + (p-total));		
	}
}

descuento();