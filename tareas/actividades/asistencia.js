function marcarAsistencia(e){
    let etiqueta = e.target

    if(etiqueta.tagName === 'LI'){

        console.log(etiqueta)
        etiqueta.classList.toggle('presente')
    }
}

document.querySelector('ol').addEventListener('click',marcarAsistencia)
