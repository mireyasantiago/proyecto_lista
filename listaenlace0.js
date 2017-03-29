alert("mensaje");


function agregarLista(){
  var input= document.getElementById("articulo").value
  if(input.length > 0){
    var li = document.createElement("li");
    var text = document.createTextNode(input);
        li.appendChild(text);
    document.getElementById("lista").appendChild(li);
  }
}

function agregarListaNueva(){
  var inputN= document.getElementById("comentario").value
  if(inputN.length > 0){
    var lis = document.createElement("li");
    var text = document.createTextNode(inputN);
        lis.appendChild(text);
    document.getElementById("listaN").appendChild(lis);
  }
}

 function eliminar(elemento){
 elemento.parentNode.remove();
}
