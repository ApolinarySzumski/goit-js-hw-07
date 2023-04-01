import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

const addToGallery = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href=${galleryItem.original}>
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source=${galleryItem.original}
      alt=${galleryItem.description}
    />
  </a>
</div>`,
  )
  .join("");

ulGallery.insertAdjacentHTML("afterbegin", addToGallery);

const selectPhoto = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="855">
  `);
  instance.show();

  ulGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};

ulGallery.addEventListener("click", selectPhoto);
