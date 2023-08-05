const URL_BASE = "http://localhost:3000/";  


const GenerarClaveAcceso = (length) => {
    const characters = '0123456789abcdef';
    let Clave = '';
  
    for (let i = 0; i < length; i++) 
    {
      const randomIndex = Math.floor(Math.random() * characters.length);
      Clave += characters[randomIndex];
    }
  
    return Clave;
};

function ActualizarClave()
{

}


function Validacion()
{
    console.log("HOLAAAS");

    var usuario = $("#user").val();
    var password = $("#user_password").val();

    if(usuario == "" || usuario == 0)
    {
        alert ("El espacio de nombre de usuario no puede estar vacío");
        return false;
    }

    if(password == "" || password == 0)
    {
        alert ("El espacio de contraseña no puede estar vacío");
        return false;
    }

    $.ajax({
        "url": URL_BASE + "usuarios",
        "type": "GET",
        "dataType": "json",
        "success": function(r)
        {
            r.forEach(function(item, index){
                console.log(item);
                if (item.nombre_usuario == usuario && item.contrasena == password)
                {
                    console.log("BIEN");
                    var ClaveAcceso = GenerarClaveAcceso(32);
                    console.log(ClaveAcceso);
                    localStorage.setItem("AccessKey" , ClaveAcceso);
                    localStorage.setItem("UserId" , item.id);
                
                    console.log("Entra Validacion");
                    $.ajax(
                    {
                        "url": URL_BASE + "validacion",
                        "type": "POST",
                        "dataType": "json",
                        "data":
                        {
                            "id": localStorage.getItem("UserId"),
                            "clave_validacion": localStorage.getItem("AccessKey"),                                                                           
                        },
                        success: function(r)
                        {
                            console.log("clave actualizada correctamente");
                            location.href="../html/admin/admin-stock.html"
                        }
                    })


                } else{

                    alert("El nombre de usuario o la contraseña son incorrectos");
                }
            })
        }


    })

}


