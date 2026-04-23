const web = {
    cargarSitio(){
        this.estilos()
        this.encabezado()
        this.pie()
    },
    // Cargar estilos
    estilos() {
        // Agregar los estilos
        const estilos = document.createElement('link')
        estilos.rel = 'stylesheet'
        estilos.href = '/app.css'

        document.head.append(estilos)
    },

    // Navegación del sitio
    encabezado() {
        const html = `<nav>
        <a href="/actividades/">Actividades</a>
        <a href="/bloques/">Bloques</a>
        <a href="/educacion/">Educación</a>
        <a href="/hobbies/">Hobbies</a>
        <a href="/informacion/">Información</a>
    </nav>`;

        // Agregar el header
        const header = document.createElement('div')
        header.innerHTML = html

        document.body.prepend(header)
    },

    // Pie del sitio
    pie() {
        let html = ``
        const footer = document.createElement('footer')
        // Agregar contenido del footer
        footer.innerText = 'Academia de programación'
        document.body.appendChild(footer)
    }
}

web.cargarSitio()
