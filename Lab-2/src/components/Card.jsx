export default function Card({ imgSrc, country, hotel, rating, price }) {
  const good = Number(rating) > 4.0;

  return (
    <article className="card">
      <img className="card__img" src={imgSrc} alt={`${country} photo`} />
      <h2 className="card__country">{country}</h2>
      <h3 className="card__hotel">{hotel}</h3>
      <p className={`card__rating ${good ? "good" : "bad"}`}>
        {rating} <span className="star">★</span>
      </p>
      <p className="card__price">{price}/night</p>
    </article>
  );
}
