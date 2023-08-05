const URL_BASE = "http://localhost:3000/";  

function Validado()
{
    $.ajax(
    {
        "url": URL_BASE + "usuario",
        "type": "GET",
        "dataType": "json",
        "data": 
        {
            "id": localStorage.getItem("UserId"),
        },
        success: function(r)
        {
            r.forEach(function(item, index)
            {
                if(item.clave_validacion == localStorage.getItem("AccessKey"))
                {
                    console.log("VALIDADO");
                } else{
                    console.log("NO VALIDADO");
                    alert("Ocurrio un problema al validar su usuario");
                    location.href="../main-menu.html";
                }
            })
       
        },
    });
}

function CargarStock()
{
    console.log("ENTRA FUNCION");
    $.ajax(         //Ajax para traer los productos de mi base de datos y ponerlos en la pagina
    {    
        "url": URL_BASE + "productos",
        "type": "GET",  //para obtener los productos ya cargados
        "dataType": "json",
        "success": function(r)
        {
            $("table tbody").empty();             //vacío mi tabla antes de mostrar los productos cargados
            r.forEach(function(item, index){    //recorro el array que devuelve el success que contiene la info de mis productos, lo almaceno en item
                console.log(item);
               
                    let elemento =                  //creo una variable elemento la cual tiene el codigo html necesario para agregar una fila a mi tabla de la pagina con el contenido de un producto
                    `
                    <tr data-id="${item.id}">
                        <td>${item.nombre_producto}</td>
                        <td>${item.marca_producto}</td>
                        <td>${item.stock}</td>
                        <td>$${item.precio}</td>
                        <td class="opciones-botones">
                        <a href="../admin/admin-producto.html" onclick="GuardarId(${item.id})" class="boton-editar">Editar</a>      
                        <a href="" onclick="EliminarProducto(${item.id})" class="boton-eliminar">Eliminar</a>
                        </td>
                    </tr>
                    `
                
                    $("table tbody").append(elemento);  //agrego la variable elemento al tbody de mi tabla en mi pagina
               

            })
        }
    })
}

function CargarProducto()
{
    $.ajax(
        {
            "url": URL_BASE + "producto",
            "type": "GET",
            "dataType": "json",
            "data": 
            {
                "id": localStorage.getItem("IdProducto"),
            },
            success: function(r)
            {
                r.forEach(function(item, index)
                {
                    document.getElementById("nombre_producto").value = item.nombre_producto;
                    document.getElementById("marca_producto").value = item.marca_producto;
                    document.getElementById("stock_producto").value = item.stock;
                    document.getElementById("precio_producto").value = item.precio;
                    document.getElementById("tipo_producto_id").value = item.tipo_producto_id;
                })
           
            },
        });
}

function GuardarProducto()
{
    var nombre = $(".producto_nombre").val();
    var marca = $(".producto_marca").val();
    var stock = $(".producto_stock").val();
    var precio = $(".producto_precio").val();
    var tipo = $("#tipo_producto_id").val();

    if(nombre == "" || nombre == 0)
    {
        alert ("El espacio de nombre no puede estar vacío");
        return false;
    }

    if(marca == "" || marca == 0)
    {
        alert ("El espacio de marca no puede estar vacío");
        return false;
    }

    if(stock == "")
    {
        alert ("El espacio de stock no puede estar vacío");
        return false;
    }

    if(precio == "" || precio == 0)
    {
        alert ("El espacio de precio no puede estar vacío");
        return false;
    }

    if(tipo == "" || tipo == 0)
    {
        alert ("El espacio de tipo no puede estar vacío");
        return false;
    }

    $.ajax(
        {
           "url": URL_BASE + "producto",
           "type": "POST",
           "dataType": "json",
           "data":
           {
                "id": localStorage.getItem("IdProducto"),
                "nombre_producto": nombre,
                "marca_producto": marca,
                "precio": precio,
                "stock": stock,
                "tipo_producto_id": tipo,
           },
           success: function(r)
           {
                location.href = "admin-stock.html";
           }
        })

}

function GuardarId(id)   //guardo en localstorage el id del producto
{
    localStorage.setItem("IdProducto", id);
}

function EliminarProducto(id)
{
    $.ajax(
        {
            "url": URL_BASE + "producto",
            "type": "DELETE",
            "dataType": "json",
            "data": 
            {
                "id": id,
            },
            success: function(r)
            {
                location.reload();
            }
            
        });
}

function CerrarSesion()
{
    localStorage.setItem("AccessKey" , "");
}


