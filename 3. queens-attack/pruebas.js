var n = 10;
/*
for (i=3; i<=10; i++){
  console.log(i);
}
*/
list = [];
console.log('.....');
var column = 4
for (i = 2; i<=3; i++){
  
  for ( j = column; j ==column; j++)
    list.push([i,j]);
  column += 1;
}
console.log(list);
console.log('comparando.....');
list.forEach(element =>{
  console.log(element);
  if( element[0] == 2 && element[1] == 4 ){
    console.log('´Pares iguales:', element);
  }
})