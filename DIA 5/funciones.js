function recomendarPelicula(genero){
    let mensaje = analizarPelicula(genero);

    let elementoRecomendacion =document.getElementById("recomendacion");

    elementoRecomendacion.textContent= "Nuestra recomendacion es " + mensaje;
}

function analizarPelicula(genero){

    let mensaje;

    let edad =Number(document.getElementById("inputEdad").value);

    switch(genero){

        case "comedia":
            if (edad<16){
                mensaje="Todopoderoso";

            }else{
                mensaje="Qué pasó anoche?";
            }
            break;

            case "terror":
            if (edad<16){
                mensaje="No hay peliculas disponibles de este género para menores de 16";

            }else{
                mensaje="Hell House LLC";
            }
            break;

    }
    return mensaje;
}