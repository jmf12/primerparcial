'use strict'


const generarNoticia=(id,titulo,descripcion,fecha,categoria)=>{
    let noticia= `<div class="card col-12 mt-2" >                        
    <div class="card-body">
      <h5 class="card-title">${titulo} - ${categoria} - ${fecha}</h5>
      <p class="card-text">
         ${descripcion}
      </p>
      <a href="javascript:abrirNoticia(${id})" id="${id}" value="${id}" class="card-link">Ver mas...</a>
    </div>
  </div>`;

  return noticia;
}
const cargarNoticias= (url)=>{
    fetch(url)
    .then(r=>r.json())
    .then(noticias=>{    
        let todas= '';
        let i =0;   
        localStorage.setItem("noticias", JSON.stringify(noticias));    
        noticias.forEach(noticia => {
            
            if(i<4){
        todas+= generarNoticia(noticia.id,noticia.titulo,noticia.descripcion,noticia.fecha,noticia.categoria);
            }else{
                return false;
            }
           
        i++;
        });
        document.getElementById("noticias").innerHTML= todas;
    });
}

function abrirNoticia(id){
    var noticia = localStorage.getItem('noticias');
    let noti ='';
    var noticia = JSON.parse(noticia);
    for(let item of noticia){
        if(id==item.id){
             noti +=`
            <h2>${item.titulo} - ${item.categoria} - ${item.fecha}</h2>
            <h5>${item.descripcion}</h5>
            <img src="${item.img}" width="30%">
            <p>${item.detalle}</p>
            <a href="javascript:cargarNoticias('https://demo6497253.mockable.io/noticias');">Volver</a>
    `;
        }
        
    }
    document.getElementById("noticias").innerHTML= noti;
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

