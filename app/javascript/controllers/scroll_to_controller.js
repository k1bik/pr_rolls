import ScrollTo from "@stimulus-components/scroll-to"

export default class ScrollToController extends ScrollTo {
  get defaultOptions() {
    return {
      offset: 100,
      behavior: "smooth",
    }
  }
}
