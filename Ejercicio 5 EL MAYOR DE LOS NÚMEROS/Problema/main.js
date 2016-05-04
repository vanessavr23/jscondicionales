function grande(){
	var a = parseInt(prompt("primer número"));
	var b = parseInt(prompt("segundo número"));
	var c = parseInt(prompt("tercer número"));
	if (a>b && a>c){
		document.write("el número " + a + " es mayor")
	}
	else if (b>a && b>c){
		document.write("el número " + b + " es mayor")
	}
	else if (c>a && c>b ){
		document.write("el número " + c + " es mayor")
	}
}
grande();