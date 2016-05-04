function promedio (){
  var a = parseInt(prompt("nota 1"));
  var b = parseInt(prompt("nota 2"));
  var c = parseInt(prompt("nota 3"));
  var total = 0;
  total = (a+b+c)/3;
  if(total>=6){
    document.write("aprobaste, tu nota es " + total);
  }
    else{
      document.write("Reprobaste, tu nota es " + total);
    }
}
promedio();