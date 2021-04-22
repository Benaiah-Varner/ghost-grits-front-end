import { useState } from 'react';
import Select from 'react-select';
import { ADD_CUSTOM_ITEM } from './queries/cartQuerie';
import { CUSTOM_ITEM_QUERY } from './queries/cartQuerie';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {useCart} from '../lib/cartState';

const dressings = [
  { label: 'Cesar Dressing', value: 'Cesar Dressing' },
  {
    label: 'Lemon Olive Oil Dressing',
    value: 'Lemon Olive Oil Dressing',
  },
  { label: 'Balsamic Vinaigrette', value: 'Balsamic Vinaigrette' },
  { label: 'Rhubarb Vinaigrette', value: 'Rhubarb Vinaigrette' },
  { label: 'No Dressing', value: 'No Dressing' },
];

const toppings = [
  { label: 'Tomatoes', value: 'Tomatoes' },
  { label: 'Cucumbers', value: 'Cucumbers' },
  { label: 'Kalamata Olives', value: 'Kalamata Olives' },
  { label: 'Globe Radish', value: 'Globe Radish' },
  { label: 'Pickled Banana Peppers', value: 'Pickled Banana Peppers' },
  { label: 'Bean Sprout', value: 'Bean Sprout' },
  { label: 'Wild Rice Crisp', value: 'Wild Rice Crisp' },
  { label: 'Parmesan Cheese', value: 'Parmesan Cheese' },
];

const CustomSalad = () => {
  const [topping, setTopping] = useState(); 
  const [dressing, setDressing] = useState({
    dressing: '',
  });

  const saladState = {
    topping,
    dressing,
  };

  const [addToCart, {loading, data, error}] = useMutation(ADD_CUSTOM_ITEM, {
    variables: {
      dressing: saladState.dressing.dressing,
      toppings: saladState.topping?.join(', ')
    },
    refetchQueries: [{ query: CUSTOM_ITEM_QUERY }]
  });

  const handleToppings = (e) => {
    setTopping(Array.isArray(e) ? e.map((topping) => topping.label) : []);
  };

  const handleChange = async (e) => {
    setDressing({
      ...dressing,
      dressing: e.value,
    });
  };

  const { openCart } = useCart();

  const handleClick = () => {
    addToCart();
    openCart();
  }

  const customStyled = {
    dropdownIndicator: () => ({
      color: '#662916',
      fontsize: '1rem'
    }),
    option: () => ({
      color: '#662916'
    }),
    control: () => ({
      border: '1px solid #662916',
      borderRadius: '5px',
      display: 'flex'
    }),
    placeholder: () => ({
      color: '#662916'
    }),
    singleValue: () => ({
      color: '#662916'
    })
  };


  return (
      <div className="salad">
        <h3>Build Your Own Salad</h3>
        <p>Romaine Leaves, Spring Mix Greens, Baby Swiss Char</p>
        <Select
          className='select'
          onChange={handleToppings}
          className="select"
          options={toppings}
          isMulti
          styles={customStyled}
          placeholder='Choose any two Toppings'
        />
        <Select
          className='select'
          onChange={handleChange}
          name="dressing"
          className="select"
          options={dressings}
          styles={customStyled}
          placeholder='Choose Your Dressing'
        />
        <span>$10</span>
        <button onClick={handleClick} className='addToCart'> <FontAwesomeIcon className='icon' icon={faCartPlus} />Add To Cart</button>
      </div>
  );
};

export default CustomSalad;
