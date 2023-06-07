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
    console.log(cart);
  };

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeaderNavigation />}>
            <Route index element={<ShopPage handleClick={handleClick} />} />
            {/* <Route path="/shop" element={<Shops />}> */}
            {/* <Route path="milkylife" element={<MilkyLife />} /> */}
            {/* <Route path="candyplanet" element={<CandyPlanet />} /> */}
            {/* <Route path="burgerclub" element={<BurgerClub />} /> */}
            {/* </Route> */}
            <Route path="/card" element={<CartPage cart={cart} />} />
            <Route path="*" element={<div>Page not found </div>} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
