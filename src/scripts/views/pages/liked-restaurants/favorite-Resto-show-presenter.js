class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurants.getAllResto();
    this._displayResto(restaurants);
  }

  _displayResto(restaurants) {
    this._view.showFavoriteResto(restaurants);
  }
}

export default FavoriteRestoShowPresenter;
