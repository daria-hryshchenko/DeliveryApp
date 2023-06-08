import { useState, useEffect } from 'react';

import { Form, Label, Input, Button } from './CartPage.Styled';

import { List, Item } from './../ShopPage/ShopPage.Styled';

export default function CardPage({ cart, handleChange }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map(item => (ans += Number(item.price)));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" onChange={handleInputChange} required />
      <Label htmlFor="number">Phone</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Label htmlFor="address">Address:</Label>
      <Input type="text" name="address" onChange={handleInputChange} required />

      <div>
        {cart.map(item => {
          const { _id, title, price, image, amount } = item;
          return (
            <List key={item._id}>
              <Item>
                <img
                  src={`https://deliveryapp-vmua.onrender.com${item.image}`}
                  alt={item.title}
                />
              </Item>
              <Item>{item.title}</Item>
              <Item>Price: ${item.price}</Item>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
            </List>
          );
        })}
      </div>

      <div>Total price: {price}</div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
