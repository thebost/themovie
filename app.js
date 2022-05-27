let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
    
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
    
});




const cargarPeliculas = async() => {
    
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38df822b261c410b5f5797ad8e93b0e0&language=es-CO&page=${pagina}`);
        

  
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            
            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;  
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        }

    }catch(error){
        console.log(error);
    }
    
  
}

cargarPeliculas();