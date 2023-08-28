/*********************** Generador contenido dinámicamente ***********************/
const proyectos_casas = [
    {
        id:"casa-1",
        nombre: "CASA COL. MODERNA",
        src: "assets/img/CASA COL. MODERNA/pre venta (1).png",
        precio: "",
        urls: [
            "assets/img/CASA COL. MODERNA/pre venta (1).png",
        ]
    },
    {
        id:"casa-2",
        nombre: "CASA VIENTO HUASTECO",
        src: "assets/img/CASA VIENTO HUASTECO/¡VENTA DE CASA!.png",
        precio: "$1,250,000.00",
        urls: [
            "assets/img/CASA VIENTO HUASTECO/¡VENTA DE CASA!.png",
            "assets/img/CASA VIENTO HUASTECO/7b0f9381-8362-40eb-9449-27c92f2fe5ec.jpg",
            "assets/img/CASA VIENTO HUASTECO/202f3741-95e5-48b5-8a7f-2d535e421e87.jpg",
            "assets/img/CASA VIENTO HUASTECO/2075d9d7-663f-40e2-a1ea-4b68da9cfe2a.jpg",
            "assets/img/CASA VIENTO HUASTECO/d2aac6ba-d392-4149-bf3b-33b87e50c5c2.jpg",
        ]
    },
    {
        id:"casa-3",
        nombre: "FRACCIONAMIENTO JARDINES DEL SAUCE",
        src: "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/1.png",
        precio: "$1,800,000.00",
        urls: [
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/1.png",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/4.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/6.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/7.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/9.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/11.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/12.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/12.png",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/13.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/14.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/15.jpeg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/317719421_5446418665487688_5453997659802290101_n.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/WhatsApp Image 2023-05-16 at 10.36.38.jpeg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/WhatsApp Image 2023-05-16 at 10.36.39.jpeg",
        ]
    },
]

const proyectos_terrenos = [
    {
        id:"terreno-1",
        nombre: "PEDREGAL",
        src: "assets/img/PEDREGAL/342729176_783125086583308_6161645058872096818_n.jpg",
        precio: "$560,000.00",
        urls: [
            "assets/img/PEDREGAL/342729176_783125086583308_6161645058872096818_n.jpg",
            "assets/img/PEDREGAL/Diseño sin título (22).png",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.04 AM (1).jpeg",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.04 AM.jpeg",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.05 AM.jpeg",
        ]
    },
]

const proyectos_arrays = {
    proyectos_casas,
    proyectos_terrenos
};

// Para ajustar la altura
const mideHeights = (elementos) => {
    let minHeight = 9999;

    elementos.forEach((item) => {
        const infoHeight = item.offsetHeight;

        if (infoHeight < minHeight) {
            minHeight = infoHeight;
        }
    });

    elementos.forEach((item) => {
        item.style.height = `${minHeight}px`;
    })
}

const insertaProyectos = (array, proyectos, id) => {
    // Obtiene el div que dejé en el html donde irá todo
    const contenido = document.getElementById(id);

    proyectos.forEach(proyecto => {
        // Aquí se crean los componentes y se anidan (no tocar esto por las clases !!)
        // Esto es hasta las imagenes
        const galleryItemContainer = document.createElement("div");
        galleryItemContainer.classList.add("gallery-item-container");

        const img = document.createElement("img");
        img.src = proyecto.src;
        img.alt = proyecto.nombre;

        galleryItemContainer.appendChild(img);

        // Aquí comienza lo de abajo de cada imagen(igual no tocarlo por el tema de las clases !!)
        const galleryItemInfo = document.createElement("div");
        galleryItemInfo.classList.add("gallery-item-info");

        const h4 = document.createElement("h4");
        h4.textContent = proyecto.nombre;

        const h5 = document.createElement("h5");
        h5.textContent = proyecto.precio;

        const a = document.createElement("a");
        a.href = "#inline-content";
        a.id = proyecto.id;
        a.classList.add("glightbox4", "boton-modal");
        a.textContent = "Ver más";
        a.setAttribute("data-array", array);

        galleryItemInfo.appendChild(h4);
        galleryItemInfo.appendChild(h5);
        galleryItemInfo.appendChild(a);

        // Según yo aquí se comienzan a generar lso elementos. (Falta un row?)
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-4", "col-sm-6", "col-12", "hover-gallery", "d-flex", "flex-column");
        // Quité estas clases de arriba "d-flex", "flex-column", "justify-content-between"
        colDiv.appendChild(galleryItemContainer);
        colDiv.appendChild(galleryItemInfo);

        contenido.appendChild(colDiv);
    });
}

insertaProyectos("proyectos_casas", proyectos_casas, "contenido-casas");
insertaProyectos("proyectos_terrenos", proyectos_terrenos, "contenido-terrenos");

/*********************** GLIGHTBOX ***********************/
const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn d-none" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
    <button class="gprev gbtn d-none" tabindex="1" aria-label="Previous">{prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
</div>
</div>`;

/* Contenido de lightbox */
// Función genérica para manejar el clic en cualquier botón
const handleButtonClick = (event, array) => {
    const modal = document.getElementById("inline-content");
    const buttonId = event.target.id;

    // Encuentra el índice según el id de cada elementos
    const index = array.findIndex(proyecto => proyecto.id === buttonId);

    // Si el índice no existe en el Array, entonces no existe ese elemento, por lo que detiene la ejecución y básicamente no hace nada el botón
    if (index === -1) {
        return;
    }

    // Borra el contenido del 'modal'
    modal.innerHTML = '';

    // Crear la estructura de la galería, los array
    // Primero crear el banner
    const galleryItemBanner = document.createElement("div");
    galleryItemBanner.classList.add("gallery-item-banner");
    galleryItemBanner.style.backgroundImage = `url("${array[index].src}")`;

    const img = document.createElement("img");
    img.classList.add("gallery-item-banner-img");
    img.src = array[index].src;
    img.alt = array[index].nombre;

    galleryItemBanner.appendChild(img);

    // Esto es para el titulo del proyecto y la galería del mismo
    const galleryItemInfo = document.createElement("div");
    galleryItemInfo.classList.add("gallery-item-info");

    const title = document.createElement("h2");
    title.textContent = array[index].nombre;

    const galleryItemsRow = document.createElement("div");
    galleryItemsRow.classList.add("row", "gy-3", "mt-3");

    // Esto es para generar la galería interna
    let contador = 1;
    array[index].urls.forEach(item => {
        const galleryItemsCol = document.createElement("div");
        galleryItemsCol.classList.add("col-sm-6", "col-md-4", "col-12", "d-flex", "flex-column", "justify-content-end");

        const anchor = document.createElement("a");
        // anchor.href = `${item}`;
        anchor.id = `${array[index].nombre}-${contador}`;
        anchor.classList.add("glightbox5");

        const imgs = document.createElement("img");
        imgs.src = item;
        imgs.alt = `${array[index].nombre}-${contador}`;

        anchor.appendChild(imgs)
        galleryItemsCol.appendChild(anchor);
        galleryItemsRow.appendChild(galleryItemsCol);

        contador++;
    });

    galleryItemInfo.appendChild(title);
    galleryItemInfo.appendChild(galleryItemsRow);

    // Pegar ambos elementos al 'modal'
    modal.appendChild(galleryItemBanner);
    modal.appendChild(galleryItemInfo);

    // Lightbox del modal
    const lightboxInlineIframe = GLightbox({
        lightboxHTML: customLightboxHTML,
        selector: `#${buttonId}`,
        touchNavigation: false,
        draggable: false,
        slideEffect: false,
        keyboardNavigation: false,
        preload: false,
    });

    // Destruye el 'modal' al cerrarse'
    lightboxInlineIframe.on('close', () => {
        lightboxInlineIframe.destroy();
    });

    // abre el 'modal' al final de todo
    lightboxInlineIframe.open();
}

// Obtén una referencia a todos los botones
const buttons = document.querySelectorAll('.boton-modal');
// Agrega el evento de clic a cada botón
buttons.forEach(button => {
    const arrayName = button.getAttribute('data-array');

    button.addEventListener('click', event => {
        handleButtonClick(event, proyectos_arrays[arrayName]);
    });
});


// El listener hace que cada que se mueva la pantalla se ajuste el height de cada div
window.addEventListener('resize', () => {
    const container = document.querySelectorAll('.gallery-item-container');
    container.forEach(element => {
        const width = element.offsetWidth;

        // Calcular el height (el porcentaje lo saqué de hacerlo manualmente)
        const height = (width * 83.8265) / 100;

        // Se coloca el height adecuado
        element.style.height = `${height}px`;
    });
});

// Ejecuta el evento al comenzar
window.dispatchEvent(new Event('resize'));
