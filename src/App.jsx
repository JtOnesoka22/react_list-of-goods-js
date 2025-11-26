import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const toggleReverse = () => {
    setIsReversed(prev => !prev);
  };

  const applySort = (sortedArray) => {
    return isReversed ? [...sortedArray].reverse() : sortedArray;
  };

  const reset = () => {
    setGoods(goodsFromServer);
    setSortField('');
    setIsReversed(false);
  };

  const sortByAlphabet = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));
    setGoods(applySort(sorted));
    setSortField('alphabet');
  };

  const sortByLength = () => {
    const sorted = [...goods].sort((a, b) => a.length - b.length);
    setGoods(applySort(sorted));
    setSortField('length');
  };

  const isModified =
    sortField !== '' ||
    isReversed ||
    goods.join() !== goodsFromServer.join();


  return (
    <div className="section content">

      <div className="buttons">
        <button
          className={`button is-info ${sortField === 'alphabet' ? '' : 'is-light'}`}
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>
      </div>

      <div className="buttons">
        <button
          className={`button is-success ${sortField === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>
      </div>

      <div className="buttons">
        <button
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={toggleReverse}
        >
          Reverse {isReversed ? '(ON)' : ''}
        </button>
      </div>

      <div className="buttons">
        {isModified && (
          <div className="buttons">
            <button
              className="button is-danger"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good" className="item">
            {good}
          </li>
        ))}
      </ul>

    </div>
  );
};


/*   <div className="section content">
    <div className="buttons">
      <button type="button" className="button is-info is-light">
        Sort alphabetically
      </button>

      <button type="button" className="button is-success is-light">
        Sort by length
      </button>

      <button type="button" className="button is-warning is-light">
        Reverse
      </button>

      <button type="button" className="button is-danger is-light">
        Reset
      </button>
    </div>

    <ul>
      <li data-cy="Good">Dumplings</li>
      <li data-cy="Good">Carrot</li>
      <li data-cy="Good">Eggs</li>
      <li data-cy="Good">Ice cream</li>
      <li data-cy="Good">Apple</li>
      <li data-cy="Good">...</li>
    </ul>
  </div>
*/
