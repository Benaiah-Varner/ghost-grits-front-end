import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation(
    $fixedItems: [FixedOrderItemWhereUniqueInput]!
    $customItems: [CustomOrderItemWhereUniqueInput]!
    $firstName: String!
    $lastName: String!
    $email: String!
    $charge: String
    $total: Int!
  ) {
    createOrder(
      data: {
        fixedItems: { connect: $fixedItems }
        customItems: { connect: $customItems }
        firstName: $firstName
        lastName: $lastName
        email: $email
        charge: $charge
        total: $total
      }
    ) {
      id
      firstName
      lastName
      email
      charge
      fixedItems {
        id
        name
        description
      }
      customItems {
        id
        name
        description
        choice_of_dressing
        choice_of_two_toppings
      }
    }
  }
`;

export const CREATE_FIXED_ORDER_ITEM = gql`
  mutation($fixedItems: [FixedOrderItemsCreateInput]!) {
    createFixedOrderItems(data: $fixedItems) {
      id
      name
      description
    }
  }
`;

export const CREATE_CUSTOM_ORDER_ITEM = gql`
  mutation($customItems: [CustomOrderItemsCreateInput]!) {
    createCustomOrderItems(data: $customItems) {
      id
      name
      description
      choice_of_dressing
      choice_of_two_toppings
    }
  }
`;

export const DELETE_FIXED_ITEMS = gql`
  mutation($ids: [ID!]) {
    deleteFoodCartItems(ids: $ids) {
      id
    }
  }
`;

export const DELETE_CUSTOM_ITEMS = gql`
  mutation($ids: [ID!]) {
    deleteSaladCartItems(ids: $ids) {
      id
    }
  }
`;
