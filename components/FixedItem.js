import {
  DELETE_FIXED_ITEM,
  FIXED_ITEM_QUERY,
} from '../components/queries/cartQuerie';
import { useMutation } from '@apollo/client';

const FixedItem = ({ item }) => {
  const [deleteFromCart, { data, loading, error }] = useMutation(
    DELETE_FIXED_ITEM,
    {
      variables: {
        id: item.id,
      },
      refetchQueries: [{ query: FIXED_ITEM_QUERY }],
    }
  );

  return (
    <div className="order-item">
      <h4 onClick={deleteFromCart}>&times;</h4>
      <div>
        <h3>{item.food.name}</h3>
        <p>{item.food.description}</p>
      </div>
      <h3>${item.food.price}</h3>
    </div>
  );
};

export default FixedItem;
