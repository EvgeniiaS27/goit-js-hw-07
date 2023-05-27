import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const makeImage = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const makeGalleryImage = galleryItems.map(makeImage).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGalleryImage);

galleryRef.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const originalSizeImage = e.target.dataset.source;

  const originalImage = basicLightbox.create(`
    <div class="modal">
        <img
        src= ${originalSizeImage}
        width="800";
        height="600";
        />
    </div>
`);
  originalImage.show();

  window.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      originalImage.close();
    }
  });
}
