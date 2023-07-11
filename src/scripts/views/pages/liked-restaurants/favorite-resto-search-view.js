import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <input id="query" class="search-favorite" type="text" placeholder="Telusuri restaurant">
        <div id="resto-list" class="resto-list"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(restaurants) {
    this.showFavoriteResto(restaurants);
  }

  showFavoriteResto(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto-list').innerHTML = html;

    document.getElementById('resto-list').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
