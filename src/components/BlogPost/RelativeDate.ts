import timeSince from "../../utils/timeSince";
export default class RelativeDate extends HTMLElement {
  connectedCallback() {
    const createdAt = this.getAttribute("createdAt");
    if (createdAt) {
      this.textContent = timeSince(createdAt) + " ago";
    }
  }
  static observedAttributes = ["createdAt"];
}

customElements.define("relative-date", RelativeDate);
