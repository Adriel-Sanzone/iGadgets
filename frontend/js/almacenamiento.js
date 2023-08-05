const URL_BASE = "http://localhost:3000/";  

function CargarAlmacenamientos()   
{
    console.log("ENTRA FUNCION");
    $.ajax(         //Ajax para traer los almacenamiento de mi base de datos y ponerlos en la pagina
    {    
        "url": URL_BASE + "almacenamientos",
        "type": "GET",  //para obtener los almacenamiento ya cargados
        "dataType": "json",
        "success": function(r)
        {
            $("table tbody").empty();             //vacío mi tabla antes de mostrar los almacenamiento cargados
            r.forEach(function(item, index){    //recorro el array que devuelve el success que contiene la info de mis almacenamiento, lo almaceno en item
                console.log(item);
                if(item.stock > 0)              //si hay stock lo muestro en la pag
                {
                    let elemento =                  //creo una variable elemento la cual tiene el codigo html necesario para agregar una fila a mi tabla de la pagina con el contenido de un cliente
                    `
                    <tr data-id="${item.id}">
                        <td>${item.nombre_producto}</td>
                        <td>${item.marca_producto}</td>
                        <td>${item.stock}</td>
                        <td>$${item.precio}</td>
                        <td>
                            <button class="boton-comprar">Comprar</button>
                        </td>
                    </tr>
                    `
                
                    $("table tbody").append(elemento);  //agrego la variable elemento al tbody de mi tabla en mi pagina
                }
               

            })
        }
    })
}