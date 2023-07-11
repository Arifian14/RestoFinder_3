import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoSearchView from './liked-restaurants/favorite-resto-search-view';
import FavoriteRestoSearchPresenter from './liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestoShowPresenter from './liked-restaurants/favorite-Resto-show-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorite;
