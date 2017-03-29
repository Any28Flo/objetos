var arr=[];//Variable global para crear el mousntro

function Pokemon(nombre,color,amistad, ataque){
  this.nombre = nombre;
  this.color = color;
  this.amistad= amistad;
  this.ataque = ataque
  //Valor por defecto;
  this.vida = 100;
  //console.log(nombre);
}

function insertaPokemon()
{
  var nuevoPokemon = new Pokemon();
  nuevoPokemon.nombre= document.getElementById('nombre').value;
  nuevoPokemon.color= document.getElementById("color").value;
  nuevoPokemon.amistad=document.getElementById("amistad").value;
  nuevoPokemon.ataque= document.getElementById("ataque").value;
  //console.log(nuevoPokemon.nombre);
  //agr

  agregaLista(nuevoPokemon,"elementos");
  agregaLista(nuevoPokemon,"elementos2");
  arr.push(nuevoPokemon);
  listaPokemon();


}
function agregaLista(nuevoPokemon,id){

  //obtenemos el texto que vamos a insertar
  var texto= nuevoPokemon.nombre;
  //creamos el nodo
  var nuevoElemento= document.createElement("option");
  //incrustamos el texto al nodo para que lo coloce en el don
  nuevoElemento.innerHTML = texto;
  //le agregamos el hijo con los elementos
  document.getElementById(id).appendChild(nuevoElemento);


}
function listaPokemon(){
  // Nos va a enviar los elementos que hemos creado
  //Mandamos a traer donde vamos acrear nuestro nuevo nodo
  var lista = document.getElementById("lista");
  var info="";

  //mandamos a traer a la funcion por each
  //forEach=permite operar sobre todos los elementos del arreglo
  arr.forEach(function(elemento){
    console.log(elemento.nombre);
    info +=elemento.nombre+ " ",
    info +=elemento.color+ " ",
    info +=elemento.ataque + " ";

  });
  lista.innerHTML =info;
}
function regresaArreglo(){
  return arr;
}

function pelea(){
  var array= regresaArreglo();
  var elemento1= getElementById("lista").value;
  console.log(elemento1)
  //var elemento1= getElementById("elementos").value;
  //console.log(elemento1);

}
