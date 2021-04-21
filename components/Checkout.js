import { useState } from 'react';
import {
  CREATE_ORDER,
  CREATE_FIXED_ORDER_ITEM,
  CREATE_CUSTOM_ORDER_ITEM,
  DELETE_CUSTOM_ITEMS,
  DELETE_FIXED_ITEMS,
} from './queries/orderQuerie';
import { useMutation } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { CheckoutStyled } from './styles/CheckoutStyled';
import { calcTotalPrice } from '../lib/calcTotalPrice';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {useCart} from '../lib/cartState';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutForm = ({ fixedItems, customItems }) => {
  const { closeCart } = useCart();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [orderForm, setOrderForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [deleteFixedItems] = useMutation(DELETE_FIXED_ITEMS);
  const [deleteCustomItems] = useMutation(DELETE_CUSTOM_ITEMS);
  const [createCustomOrderItem] = useMutation(CREATE_CUSTOM_ORDER_ITEM);
  const [createFixedOrderItem] = useMutation(CREATE_FIXED_ORDER_ITEM);
  const [createOrder] = useMutation(CREATE_ORDER);

  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value,
    });
  };

  const fixedPrices = [];
  const foodPrice = () => {
    fixedItems?.allFoodCartItems?.map((item) => {
      fixedPrices.push(item.food.price);
    });
    return fixedPrices;
  };

  const customPrices = [];
  const saladPrice = () => {
    customItems?.allSaladCartItems?.map((item) => {
      customPrices.push(item.salad.price);
    });
    return customPrices;
  };

  const fixedFoodPrice = foodPrice().reduce((tally, item) => tally + item, 0);
  const customFoodPrice = saladPrice().reduce((tally, item) => tally + item, 0);

  const fixedOrderItem = fixedItems?.allFoodCartItems?.map((item, key) => {
    const orderItem = {
      data: { name: item.food.name, description: item.food.description },
    };
    return orderItem;
  });

  const customOrderItem = customItems?.allSaladCartItems?.map((item, key) => {
    const orderItem = {
      data: {
        name: item.salad.name,
        description: item.salad.description,
        choice_of_dressing: item.salad.choice_of_dressing,
        choice_of_two_toppings: item.salad.choice_of_two_toppings,
      },
    };
    return orderItem;
  });

  async function convertFixedItems() {
    const fixedOrder = await createFixedOrderItem({
      variables: {
        fixedItems: fixedOrderItem,
      },
    });

    return fixedOrder;
  }

  async function convertCustomItems() {
    const customOrder = await createCustomOrderItem({
      variables: {
        customItems: customOrderItem,
      },
    });
    return customOrder;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error);
    }

    const charge = `Brand: ${paymentMethod?.card?.brand}, Type: ${paymentMethod?.card?.funding}, Last 4 digits: ${paymentMethod?.card?.last4}`;

    const { data: customOrder } = await convertCustomItems();
    const { data: fixedOrder } = await convertFixedItems();

    const customId = [];
    const fixedId = [];

    fixedOrder?.createFixedOrderItems?.map((item) => {
      fixedId.push({ id: item.id });
    });

    customOrder?.createCustomOrderItems?.map((item) => {
      customId.push({ id: item.id });
    });

    const { data: order } = await createOrder({
      variables: {
        fixedItems: fixedId,
        customItems: customId,
        firstName: orderForm.firstName,
        lastName: orderForm.lastName,
        email: orderForm.email,
        charge,
        total: fixedFoodPrice + customFoodPrice,
      },
    });

    const deleteCustom = [];
    const deleteFixed = [];

    fixedItems?.allFoodCartItems?.map((item) => {
      deleteFixed.push(item.id);
    });
    customItems?.allSaladCartItems?.map((item) => {
      deleteCustom.push(item.id);
    });

    await deleteCustomItems({
      variables: {
        ids: deleteCustom,
      },
    });

    await deleteFixedItems({
      variables: {
        ids: deleteFixed,
      },
    });

    closeCart();
    router.push(`/order/${order.createOrder.id}`);
  }

  const options = [
    {label: 'Tue, April 20th', value: 'Tue, April 20th'},
    {label: 'Wed, April 21st', value: 'Wed, April 21th'},
    {label: 'Thur, April 22nd', value: 'Thur, April 22nd'},
    {label: 'Fri, April 23rd', value: 'Fri, April 23rd'},
  ]

  const timeOptions = [
    {label: '9:00 AM', value: '9:00 AM'},
    {label: '10:00 AM', value: '10:00 AM'},
    {label: '11:00 AM', value: '11:00 AM'},
    {label: '12:00 AM', value: '12:00 AM'},
    {label: '1:00 PM', value: '1:00 PM'},
    {label: '2:00 PM', value: '2:00 PM'},
    {label: '3:00 PM', value: '3:00 PM'},
    {label: '4:00 PM', value: '4:00 PM'},
    {label: '5:00 PM', value: '5:00 PM'},
  ]

  const customStyles = {
    dropdownIndicator: () => ({
      color: '#e5426c',
      fontsize: '1rem'
    }),
    option: () => ({
      color: '#e5426c'
    }),
    control: () => ({
      border: '2px solid #e5426c',
      borderRadius: '5px',
      display: 'flex'
    }),
    placeholder: () => ({
      color: '#e5426c'
    }),
    singleValue: () => ({
      color: '#e5426c'
    })
  };

  return (
    <CheckoutStyled open={checkoutOpen}>
      <button onClick={() => setCheckoutOpen(!checkoutOpen)} className='checkout-button'>{checkoutOpen ? 'Close' : 'Checkout'}</button>
      <div className="orderDet">
        <div className="total-date">
          <div className="total">
            <h3>Order Subtotal:</h3>
            <span>${calcTotalPrice(fixedItems, customItems)}</span>
          </div>
          <div className="date-time">
            <div className="select-container">
              <h3>
                <FontAwesomeIcon className="icon" icon={faCalendar} />
                Pick Up Date
              </h3>
              <Select options={options} styles={customStyles} placeholder={'Tue, April 20th'} />
            </div>
            <div className="select-container">
              <h3>
                <FontAwesomeIcon className="icon" icon={faClock} />
                Pick Up Time
              </h3>
              <Select options={timeOptions} styles={customStyles} placeholder={'9:00 AM'} />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="names">
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={orderForm.firstName}
            />
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={orderForm.lastName}
            />
          </div>
          <div className="email">
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              onChange={handleChange}
              value={orderForm.email}
            />
          </div>
          {error && <p>{error.message}</p>}
          <CardElement className="card" />
          <button className='checkout-button'>Checkout Now</button>
        </form>
      </div>
    </CheckoutStyled>
  );
};

function Checkout({ fixedItems, customItems }) {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm fixedItems={fixedItems} customItems={customItems} />
    </Elements>
  );
}

export default Checkout;
