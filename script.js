const lista = document.getElementById("lista");
var personas = ['Roberto Luna', 'Elon Musk', 'Jeff Bezos']

const agregarPersona = () => {
    var nombre = document.getElementById("nombre");
    lista.innerHTML = '';
    personas.push(nombre.value);

    mostrarValores();
    nombre.value = " ";
}

const mostrarValores = () => {
    personas.map(persona =>{
        var li = document.createElement('li');
        li.innerHTML = persona;
        lista.appendChild(li);
    })
}

const borarrValores = () =>{
    lista.innerHTML = '';
    personas = [];
}