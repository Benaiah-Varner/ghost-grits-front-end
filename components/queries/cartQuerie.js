import gql from 'graphql-tag';

export const CUSTOM_ITEM_QUERY = gql`
  query CUSTOM_ITEM_QUERY {
    allSaladCartItems {
      id
      salad {
        price
        name
        description
        choice_of_dressing
        choice_of_two_toppings
      }
    }
  }
`;

export const FIXED_ITEM_QUERY = gql`
  query FIXED_ITEM_QUERY {
  allFoodCartItems {
    id
    quantity
    food {
      name
      description
      price
      id
    }
  }
}
`;

export const ADD_CUSTOM_ITEM = gql`
  mutation ADD_CUSTOM_ITEM($toppings: String, $dressing: String ) {
  createSaladCartItem(data: {salad: { create: {
    name: "Build Your Own Salad"
    description: "Romaine Leaves, Spring Mix Greens, Swiss Char"
    choice_of_dressing: $dressing
    choice_of_two_toppings: $toppings
    category: {connect: {
      id: "60646e47feccff0850f951e7"
    }}
    price: 10
  } } }) {
    salad {
      name
      description
      choice_of_dressing
      choice_of_two_toppings
      category {
        id
      }
      price
    } 
  }
}
`;

export const ADD_FIXED_ITEM = gql`
  mutation($id: ID!) {
  createFoodCartItem(data: {quantity: 1, food: { connect: { id: $id } }}) {
    quantity
    food {
      id
      name
      description
      price
    }
  }
}
`;

export const DELETE_FIXED_ITEM = gql`
  mutation DELETE_FIXED_ITEM($id: ID!) {
  deleteFoodCartItem(id: $id) {
    id
  }
}
`;

export const DELETE_CUSTOM_ITEM = gql`
  mutation DELETE_FIXED_ITEM($id: ID!) {
  deleteSaladCartItem(id: $id) {
    id
  }
}
`;