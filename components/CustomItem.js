import {
  DELETE_CUSTOM_ITEM,
  CUSTOM_ITEM_QUERY,
} from '../components/queries/cartQuerie';
import { useMutation } from '@apollo/client';

const CustomItem = ({ item }) => {
  const [deleteFromCart, { data, error, loading }] = useMutation(
    DELETE_CUSTOM_ITEM,
    {
      variables: {
        id: item.id,
      },
      refetchQueries: [{ query: CUSTOM_ITEM_QUERY }],
    }
  );

  return (
    <div className="menu-item">
      <h4 onClick={deleteFromCart}>&times;</h4>
      <div>
        <h3>{item.salad.name}</h3>
        <p>Dressing: {item.salad.choice_of_dressing}</p>
        <p>Toppings: {item.salad.choice_of_two_toppings}</p>
      </div>
      <span>${item.salad.price}</span>
    </div>
  );
};

export default CustomItem;
