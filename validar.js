
function checkRut(campo){
  if ( campo.length == 0 ){ return false; }

  campo = campo.replace('-','')
  campo = campo.replace(/\./g,'')

  var suma = 0;
  var caracteres = "1234567890kK";
  var contador = 0;    
  for (var i=0; i < campo.length; i++){
      u = campo.substring(i, i + 1);
      if (caracteres.indexOf(u) != -1)
      contador ++;
  }
  if ( contador==0 ) { return false }
  
  var rut = campo.substring(0,campo.length-1)
  var drut = campo.substring( campo.length-1 )
  var dvr = '0';
  var mul = 2;
  
  for (i= rut.length -1 ; i >= 0; i--) {
      suma = suma + rut.charAt(i) * mul
              if (mul == 7)     mul = 2
              else    mul++
  }
  res = suma % 11
  if (res==1)        dvr = 'k'
              else if (res==0) dvr = '0'
  else {
      dvi = 11-res
      dvr = dvi + ""
  }
  if ( dvr != drut.toLowerCase() ) { return false; }
  else { return true; }
}

$.validator.addMethod("rut", function(value, element) { 
  return this.optional(element) || checkRut(value); 
}, "Revise el RUT");

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
            rut : true
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

  function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+'  Caracteres';
}
