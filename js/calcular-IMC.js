function mostrarMensaje(){
    alert("click")
}
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;


    var tdIMC = paciente.querySelector(".info-imc");
    var pesoEsValido = validarPeso(peso); // asumiendo de buena fe que el peso es correcto
    var alturaEsValida = validarAltura(altura); // asumiendo de buena fe que la altura es correcta

    if(!pesoEsValido) {
        pesoEsValido = false;
        tdIMC.textContent = "peso incorrecto"
        paciente.classList.add("paciente-incorrecto")
        
    }
    
    if(!alturaEsValida) {
        alturaEsValida = false;
        tdIMC.textContent = "altura incorrecta"
        paciente.classList.add("paciente-incorrecto")
    }
    
    if(pesoEsValido && alturaEsValida) {
       
        tdIMC.textContent = calcularIMC(peso, altura);
    }

}
function calcularIMC(peso, altura){
    var imc = peso / ( altura * altura); 
        return imc.toFixed(2);

}
function validarPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}
function validarAltura(altura){
    if (altura >= 0 && altura <= 3.00){
        return true;
    }
    else{
        return false;
    }
}
    