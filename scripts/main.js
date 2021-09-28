const d = document
const menuBtn = d.querySelector('nav button')
const menuLst = d.querySelector('nav .menu')
const mapBtn = d.querySelector('.map button')
const mapFrm = d.querySelector('.map iframe')

/*Barra de Navegacion */
menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'

/*Mapa de contacto*/
mapBtn.addEventListener('click', () => toggleMap() )

const toggleMap = () => {
    if(mapFrm.classList.toggle('active')){
        mapBtn.classList.replace('icon-max', 'icon-min')
    } else {
        mapBtn.classList.replace('icon-min', 'icon-max')
    }
}
