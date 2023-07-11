class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchResto(latestQuery);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundResto;
    if (this.latestQuery.length > 0) {
      foundResto = await this._favoriteRestaurants.searchResto(this.latestQuery);
    } else {
      foundResto = await this._favoriteRestaurants.getAllResto();
    }

    this._showFoundResto(foundResto);
  }

  _showFoundResto(restaurants) {
    if (!restaurants) return;

    this._view.showFavoriteResto(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
