import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const img = document.querySelectorAll('.gallery__image');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(img) {
    return galleryItems.map (({ preview, original, description}) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`
    }).join('');
}

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG'){
        return
    };

    const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute('data-source')}" width="1280">`)

instance.show()

const lightbox = document.querySelector('.basicLightbox--visible');
window.addEventListener('keydown', onEsckeyPress);

function onEsckeyPress (event) {
    const Esc_key_code = 'Escape';
    const isEscKey = event.code === Esc_key_code;

    if (isEscKey){
       instance.close();
    }
}
}



    