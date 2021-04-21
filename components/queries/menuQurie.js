import gql from 'graphql-tag';

export const ALL_FOOD = gql`
  query ALL_FIRST_FOODS($name: String!) {
    allFoodItems(where: { category: { name: $name } }) {
      name
      description
      price
      id
    }
  }
`;
