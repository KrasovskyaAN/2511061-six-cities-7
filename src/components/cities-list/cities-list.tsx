type CitiesListProps = {
  cities: readonly string[];
  activeCity: string;
  onCityChange: (city: string) => void;
};

function CitiesList({
  cities,
  activeCity,
  onCityChange,
}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item${
              city === activeCity ? ' tabs__item--active' : ''
            }`}
            href="#todo"
            onClick={(evt) => {
              evt.preventDefault();
              onCityChange(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
