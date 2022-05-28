import Masonry from "masonry-layout"
import imagesloaded from "imagesloaded"

export const imgProcess = async () => {
  const masonryLayoutEl: any = document.querySelector(".masonry-layout")

  const imagesLoaded: any = imagesloaded
  imagesLoaded(masonryLayoutEl, () => {
    console.debug("이미지 로드 완료")!
    new Masonry(masonryLayoutEl, {
      itemSelector: ".masonry-item",
    })
  })
}
