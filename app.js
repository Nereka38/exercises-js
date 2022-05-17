//Aparición Hello World
function hello(){
    document.getElementById('hello-world').innerHTML = 'Hello World';
}

function bye(){
    document.getElementById('hello-world').style.display = 'none';
    }

//Nombre de Usuario

function accept () {
    var user = document.getElementById('name').value;
    window.alert("Hola " + user);
}

//Ejercicio Calculadora
function suma() {
    document.getElementById("result").innerText =
      parseInt(document.getElementById("number1").value) +
      parseInt(document.getElementById("number2").value);
  }