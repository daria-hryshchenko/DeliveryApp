import { useState, useEffect } from 'react';
import { requestProducts } from 'api/api';

import {
  ShopPageSection,
  Wrap,
  Column,
  Title,
  List,
  Item,
  ProductScreen,
  Button,
} from './ShopPage.Styled.jsx';

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

  return (
    <ShopPageSection>
      <Wrap>
        <Column>
          <List>
            <Item>
              <Title>Shops:</Title>
            </Item>
            <Item>
              <Button type="button" onClick={handleChange} value="Milky Life">
                Milky Life
              </Button>
            </Item>
            <Item>
              <Button type="button" onClick={handleChange} value="Burger Club">
                Burger Club
              </Button>
            </Item>
            <Item>
              <Button type="button" onClick={handleChange} value="Candy Planet">
                Candy Planet
              </Button>
            </Item>
          </List>
        </Column>

        <Column>
          {products.length !== 0 ? (
            <ProductScreen>
              {products.map(item => {
                const { _id, title, price, image } = item;
                return (
                  <List key={_id}>
                    <Item>
                      <img
                        src={`https://deliveryapp-vmua.onrender.com/${image}`}
                        alt={title}
                      />
                    </Item>
                    <Item>{title}</Item>
                    <Item>${price}</Item>
                    <Item>
                      <button type="button" onClick={() => handleClick(item)}>
                        Add To Cart
                      </button>
                    </Item>
                  </List>
                );
              })}
            </ProductScreen>
          ) : (
            <div>Choose a shop</div>
          )}
        </Column>
      </Wrap>
    </ShopPageSection>
  );
}
