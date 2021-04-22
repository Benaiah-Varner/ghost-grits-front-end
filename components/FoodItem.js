import { ADD_FIXED_ITEM, FIXED_ITEM_QUERY } from './queries/cartQuerie';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../lib/cartState';

const FixedItem = ({ food }) => {
  const [addToCart, { data, loading, error }] = useMutation(ADD_FIXED_ITEM, {
    variables: {
      id: food.id,
    },
    refetchQueries: [{ query: FIXED_ITEM_QUERY }],
  });

  const { openCart } = useCart();

  const handleClick = () => {
    addToCart();
    openCart();
  }

  return (
    <div className="menu-item">
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <span>${food.price}</span>
      <button onClick={handleClick} className="addToCart">
        <FontAwesomeIcon className="icon" icon={faCartPlus} />
        Add To Cart
      </button>
    </div>
  );
};

export default FixedItem;
