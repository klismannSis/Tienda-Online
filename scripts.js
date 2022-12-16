
let products = [];  //Declaramos nuestra variable products.
let total = 0; // Se decara la variable total y se inicializa en 0.

function add(product, price) { // function add - para añadir un nuevo elemento con un valor en especifico.
    console.log(product, price); // declaramos un console.log para poder imprimir un mensaje o texto. Dentro del cual resive como argumento a prodcut, price(precio).
    products.push(product); // Aplicamos el metodo push, el cual realiza una accion de añadir unos o mas elementos al final del array y devolver la longitud del array.
    total = total + price; 
    document.getElementById("checkout").innerHTML = `Pagar $${total}` // selecciona un elemento del documento por medio del valor del atributo id.
}

function pay() {
    window.alert(products.join(", \n")); // finalmemte nuestro metodo window.alert, el cual nos muestra un dialogo de alerta con un sms opcional.
}