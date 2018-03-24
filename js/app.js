const addButton = document.getElementById("add");

const addResistencias = e => {
e.preventDefault();
// templete=``
}

var elem = document.querySelector('.dropdown-trigger');
 var instance = M.Dropdown.init(elem, options);

 function options (){
   instance.open();
 }

 // Or with jQuery

 $('.dropdown-trigger').dropdown();


addButton.addEventListener("click",addResistencias);
