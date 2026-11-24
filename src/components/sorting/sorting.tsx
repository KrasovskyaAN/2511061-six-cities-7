import { useState } from 'react';
import { SortType, SortTypeValue } from '../../const';

type SortingProps = {
  activeSort: SortTypeValue;
  onSortChange: (sort: SortTypeValue) => void;
};

const SORT_OPTIONS: SortTypeValue[] = [
  SortType.Popular,
  SortType.PriceLowToHigh,
  SortType.PriceHighToLow,
  SortType.TopRatedFirst,
];

function Sorting({ activeSort, onSortChange }: SortingProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (sort: SortTypeValue) => {
    onSortChange(sort);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${
          isOpen ? ' places__options--opened' : ''
        }`}
      >
        {SORT_OPTIONS.map((option) => (
          <li
            key={option}
            className={`places__option${
              option === activeSort ? ' places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
