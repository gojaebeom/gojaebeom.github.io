import Masonry from "masonry-layout"
import imagesloaded from "imagesloaded"

export const imgProcess = async () => {
  const masonryLayoutEl: any = document.querySelector(".masonry-layout")

  const imagesLoaded: any = imagesloaded
  imagesLoaded(masonryLayoutEl, () => {
    new Masonry(masonryLayoutEl, {
      itemSelector: ".masonry-item",
    })
  })
}
