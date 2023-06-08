import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';

import Loader from './elements/Loader/Loader';
import HeaderNavigation from './HeaderNavigation';

const ShopPage = React.lazy(() => import('./ShopPage/ShopPage'));
const CartPage = React.lazy(() => import('./CartPage/CartPage'));

export const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = item => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let temp = Number(item.amount);
    temp += d;
    console.log(item.amount);

    return temp;
  };

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeaderNavigation />}>
            <Route index element={<ShopPage handleClick={handleClick} />} />
            <Route
              path="/card"
              element={
                <CartPage
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            />
            <Route path="*" element={<div>Page not found </div>} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
