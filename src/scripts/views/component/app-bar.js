class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
    <h1>
      <a href="/" title="Navbar Brand">Resto Finder</a>
    </h1>
    <button class="menu-button" title="off canvas button" aria-label="off canvas button">
        <i class="fa fa-times"></i>
        <i class="fa fa-bars"></i>
    </button>
    <ul class="menu-list">
        <li><a href="#/home" title="Link ke halaman home">Home</a></li>
        <li><a href="#/favorite" title="Link ke halaman favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/achmad-syarif-arifiansyah-b45361166/" title="Link ke about us" target="_blank" rel="noreferrer">About Us</a></li>
    </ul>
  </nav>
        `;
  }
}

customElements.define('app-bar', Appbar);
