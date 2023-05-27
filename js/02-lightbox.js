import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const makeImage = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`;
};

const makeGalleryImage = galleryItems.map(makeImage).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGalleryImage);

galleryRef.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
}

const galleryLightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'botton',
  captionDelay: 250,
});
