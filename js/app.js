const menu = document.querySelector('.burger');
const navegacion = document.querySelector('.navegation');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () => {
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('hidden');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnClose = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('fullScreen');
    const body = document.querySelector('body')
    if(document.querySelectorAll('.fullScren').length > 0) return;
    body.appendChild(overlay);
    btnClose.textContent = 'x';
    btnClose.classList.add('btnClose');
    
    navegacion.appendChild(btnClose);
    cerrarMenu(btnClose,overlay);
}

const cerrarMenu = (boton,overlay) =>{
    boton.addEventListener ('click',()=>{
         navegacion.classList.add('hidden');
         overlay.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('hidden');
        boton.remove();
    }
}