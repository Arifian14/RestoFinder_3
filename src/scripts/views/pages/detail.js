import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#resto');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });

    restaurantContainer.innerHTML += `
      <resto-review>
        <h2>Reviews</h2>
      </resto-review>
    `;

    const restoReview = document.querySelector('resto-review');
    resto.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestaurantReviewTemplate(review);
    });
  },
};

export default Detail;
