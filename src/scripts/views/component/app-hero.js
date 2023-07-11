class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-image"></div>
        <div class="hero-description">
        <h2 tabindex="0">Ayo Kunjungi Ragam Restoran Di Indonesia</h2>
        <p tabindex="0">Cicipi Masakan Terbaik di Seluruh Daerah</p>
        <span class="btn-hero-section">
            <a tabindex="0" class="btn-hero" href="#mainContent">Temukan disini</a>
        </span>
        </div>
    </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
