import Splide from "@splidejs/splide"
import { Controller } from "@hotwired/stimulus"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"

export default class SplideController extends Controller {
  connect() {
    const splide = new Splide(this.element, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 5,
      breakpoints: {
        1920: {
          perPage: 4,
        },
        1440: {
          perPage: 3,
        },
        1200: {
          perPage: 2,
        },
        780: {
          perPage: 1,
        },
      },
      autoScroll: {
        speed: 2,
      },
    })

    splide.mount({ AutoScroll })
  }
}
