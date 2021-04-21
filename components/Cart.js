import CartStyles from '../components/styles/CartStyles';
import CloseButton from '../components/styles/CloseButton';
import CustomItem from './CustomItem';
import FixedItem from './FixedItem';
import { useCart } from '../lib/cartState';
import {
  CUSTOM_ITEM_QUERY,
  FIXED_ITEM_QUERY,
} from '../components/queries/cartQuerie';
import Checkout from './Checkout';
import { useQuery } from '@apollo/client';

const Cart = () => {
  const { cartOpen, closeCart } = useCart();
  const { data: fixed, loading: fixedLoading, error: fixedError } = useQuery(
    FIXED_ITEM_QUERY
  );
  const { data: custom, loading: customLoading, error: customError } = useQuery(
    CUSTOM_ITEM_QUERY
  );
  return (
    <CartStyles open={cartOpen}>
      <div className='cart-header'>
        <h1>Order Summary</h1>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </div>
      <ul>
        {custom?.allSaladCartItems?.map((item, ind) => {
          return (
            <div key={ind} className="cartItem">
              <CustomItem item={item} />
            </div>
          );
        })}
        {fixed?.allFoodCartItems?.map((item, key) => {
          return (
            <div key={key} className="cartItem">
              <FixedItem item={item} />
            </div>
          );
        })}
      </ul>
      <footer>
        <Checkout fixedItems={fixed} customItems={custom} />
      </footer>
    </CartStyles>
  );
};

export default Cart;
