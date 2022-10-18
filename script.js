const h1=document.querySelector('h1');
const p = document.querySelector ('p');
const parrafito = document.querySelector ('.parrafito');
const pid = document.querySelector ('#pid');
const input = document.querySelector ('input')

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "Patito <br> feo"; // Modifica el HTML
h1.innerText = "Patito <br> feo"; // Solo modifica el texto
h1.getAttribute('class'); // Obtiene el atributo
h1.setAttribute('class', 'rojo'); // Setea el atributo
h1.classList.add ('rojo'); //Aumenta el atributo
h1.classList.remove('verde'); // remueve el atributo
h1.classList.toggle ('verde'); //Sirve para poner y quitar una clase
h1.classList.contains('verde'); // Es como un true or false que nos entrega dependiendo si contiene o no la clase que estamos preguntado
input.value = "456"; //Modifica el valor por defecto
const img = document.createElement('img'); // puede crear un elemento
img.setAttribute('src','https://www.denofgeek.com/wp-content/uploads/2013/07/ss_2a951d65c6084004dcdc292d4944c0fb4a059624.1920x1080.jpg?fit=1820%2C1024');
pid.append(img);