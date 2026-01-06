import { Controller } from "@hotwired/stimulus"

export default class ModalController extends Controller {
  connect() {
    this.element.classList.add("fade-in")
    void this.element.offsetWidth
    this.element.classList.add("visible")
  }

  close() {
    this.element.classList.remove("visible")
    this.element.addEventListener(
      "transitionend",
      () => this.element.remove(),
      { once: true }
    )
  }

  disconnect() {
    this.element.removeEventListener(
      "transitionend",
      () => this.element.remove(),
      { once: true }
    )
  }
}
