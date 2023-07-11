class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Copyright @ 2023 - Resto Finder by Achmad Syarif Arifiansyah</p>
    `;
  }
}

customElements.define('app-footer', Footer);
