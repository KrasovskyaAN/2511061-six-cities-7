import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import CommentForm from '../../components/comment-form/comment-form';
import type { Offer } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';
import Card from '../../components/card/card';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';

type OfferPageProps = {
  offers: Offer[];
};

function Offer({ offers }: OfferPageProps): JSX.Element {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  const nearOffers = offers
    .filter((item) => item.city.name === offer.city.name && item.id !== offer.id)
    .slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offer.previewImage}
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${(offer.rating / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map offers={nearOffers} />
          </section>
        </section>

        {nearOffers.length > 0 && (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearOffers.map((nearOffer) => (
                  <Card key={nearOffer.id} offer={nearOffer} variant="near-places" />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default Offer;
