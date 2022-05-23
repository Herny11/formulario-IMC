var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    


    // validar pacientes
    var errores = validarPaciente(paciente);
    if(errores.length > 0){
        exhibirMensajeError(errores);
        return;
    }
    adicionarPacienteTabla(paciente);
    
    form.reset();

    var mesajesErrores = document.querySelector("#mensaje-error");
    mesajesErrores.innerHTML = "";
});
function adicionarPacienteTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes")
    
    tabla.appendChild(pacienteTr);
}
function capturarDatosPaciente(form){
    // capturando los datos del formulario
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value, form.altura.value)

    }
    return paciente;
}
function construirTr(paciente){
        
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
      
        pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
        pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
        
        return pacienteTr;
}
function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}
function validarPaciente(paciente){
    var errores = [];
    if(paciente.nombre.length == 0){
        errores.push("Campo nombre vacio")
    }
    if(paciente.peso.length == 0){
        errores.push("Campo peso vacio")
    }
    if(paciente.altura.length == 0){
        errores.push("Campo altura vacio")
    }
    if(paciente.gordura.length == 0){
        errores.push("Campo gordura vacio")
    }

    if (!validarPeso(paciente.peso)){
       errores.push("El peso es incorrecto");
    }
    
    if(!validarAltura(paciente.altura)){
       errores.push("La altura es incorrecta");

    }
    
    return errores;
}
function exhibirMensajeError(errores){
    var ul = document.querySelector("#mensaje-error");
    ul.innerHTML = ""; 

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })
}

