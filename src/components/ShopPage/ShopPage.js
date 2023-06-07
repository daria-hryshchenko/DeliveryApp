import { useState, useEffect } from 'react';
import { requestProducts } from 'api/api';

import { ShopPageSection } from './ShopPage.Styled.jsx';

export default function ShopPage({ handleClick }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === null) {
      return;
    }
    requestProducts(query)
      .then(data => {
        if (data === undefined) {
          return setProducts([]);
        }
        setQuery(localStorage.getItem('inputValue'));
        setProducts([...data].filter(item => item.brand === query));
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  // const handleClick = event => {
  //   console.log(event.target.value);
  // };

  return (
    <ShopPageSection>
      Shops:
      <ul>
        <li>
          <button type="button" onClick={handleChange} value="Milky Life">
            Milky Life
          </button>
        </li>
        <li>
          <button type="button" onClick={handleChange} value="Burger Club">
            Burger Club
          </button>
        </li>
        <li>
          <button type="button" onClick={handleChange} value="Candy Planet">
            Candy Planet
          </button>
        </li>
      </ul>
      {products.length !== 0 ? (
        <div>
          {products.map(item => {
            const { _id, title, price, image } = item;
            return (
              <div key={_id}>
                <ul key={_id}>
                  <li>
                    <img
                      src={`https://deliveryapp-vmua.onrender.com/${image}`}
                      alt={title}
                    />
                  </li>
                  <li>{title}</li>
                  <li>${price}</li>
                  <li>
                    <button type="button" onClick={() => handleClick(item)}>
                      Add To Cart
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Choose a shop</div>
      )}
    </ShopPageSection>
  );
}
