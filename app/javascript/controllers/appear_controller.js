import { Controller } from "@hotwired/stimulus"

export default class AppearController extends Controller {
  static targets = ["item"]

  connect() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        } else {
          entry.target.classList.remove("visible")
        }
      })
    }, {
      threshold: 0.2
    })

    this.itemTargets.forEach((el) => this.observer.observe(el))
  }

  disconnect() {
    this.observer.disconnect()
  }
}
