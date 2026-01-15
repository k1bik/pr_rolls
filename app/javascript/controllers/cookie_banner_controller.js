import { Controller } from "@hotwired/stimulus"

export default class CookieBannerController extends Controller {
  static values = { storageKey: { type: String, default: "prrollsrusCookieBannerClosedDate" } }

  connect() {
    if (!this.wasClosedToday()) {
      this.element.classList.add("visible")
    }
  }

  close() {
    localStorage.setItem(this.storageKeyValue, this.todayDateString())
    this.element.classList.remove("visible")
  }

  wasClosedToday() {
    const closedDate = localStorage.getItem(this.storageKeyValue)
    if (!closedDate) return false

    return closedDate === this.todayDateString()
  }

  todayDateString() {
    return new Date().toISOString().split("T")[0]
  }
}
