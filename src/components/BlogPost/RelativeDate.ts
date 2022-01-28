import timeSince from "../../utils/timeSince";
class RelativeDate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const createdAt = this.getAttribute("createdAt");
    if (createdAt) {
      this.textContent = timeSince(createdAt) + " ago";
    }
  }
}

customElements.define("relative-date", RelativeDate);
