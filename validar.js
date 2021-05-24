
function checkRut(rut) {
    var valor = rut.value.replace('.','');
    valor = valor.replace('-','');
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    rut.value = cuerpo + '-'+ dv
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    suma = 0;
    multiplo = 2;

    for(i=1;i<=cuerpo.length;i++) {
        index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    }
    
    dvEsperado = 11 - (suma % 11);
    
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    rut.setCustomValidity('');
}

$(document).ready(function() {
    $("#formulario").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 3
        },
        correo: {
          required: true,
          email: true
        },
        ciudad: {
          required: true,
          minlength: 3
        },
        documento: {
            required: true,
            minlength: 9,
            maxlength: 10
        },
        comentario: {
            required: true,
            minlength: 15
          },
      },

      messages : {
        nombre: {
          minlength: "Ingrese al menos 3 caracteres",
          required: "Ingrese un nombre"
        },
        correo: {
            required: "Ingrese un correo valido"
          },
        ciudad: {
            minlength: "Ingrese al menos 3 caracteres",
            required: "Ingrese una ciudad"
        },
        documento: {
            required: "Ingrese un rut",
            minlength: "RUT Incompleto",
            maxlength: "RUT Incorrecto"
        },
        comentario: {
            minlength: "Ingrese al menos 15 caracteres",
            required: "Ingrese un comentario"
        }
      }
      

    });
  });
