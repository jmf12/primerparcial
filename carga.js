

const generarVistaNoticia=(id,url)=>{


}

const cargarNoticias= (url)=>{
    fetch(url)
    .then(r=>r.json())
    .then(noticias=>{    
        let todas= '';
        let i =0;   
        console.log(noticias);     
        noticias.forEach(noticia => {
            
            if(i<3){
todas+= generarNoticia(noticia.id,noticia.titulo,noticia.descripcion,noticia.fecha,noticia.categoria);
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById("noticias").innerHTML= todas;
    });
}
const cargarCategoria= (categoria,url)=>{
    fetch(url)
    .then(r=>r.json())
    .then(deportes=>{    
        let todas= '';
        let i =0;
        
        deportes.forEach(titular => {
            if(i<3){
                todas+=`<li class="list-group-item" id="d${titular.id}">
                ${titular.titulo}
            </li>`;
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById(categoria).innerHTML= todas;
    });
}

cargarCategoria("deportes","https://demo6497253.mockable.io/categoria/deporte");
cargarCategoria("tecnologia","https://demo6497253.mockable.io/categoria/tecnologia");
cargarNoticias("https://demo6497253.mockable.io/noticias");
