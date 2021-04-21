import { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useApolloClient } from '@apollo/client';
import Footer from '../../components/Footer';
import { OrderStyled } from '../../components/styles/OrderStyled';
import Header from '../../components/NavBar';
import Link from 'next/link';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      firstName
      lastName
      charge
      total
      email
      customItems {
        id
        choice_of_dressing
        choice_of_two_toppings
        name
      }
      fixedItems {
        id
        name
        description
      }
    }
  }
`;

const OrderPage = ({ query }) => {
  const client = useApolloClient();
  const [orderDetails, setOrderDetails] = useState();

  async function runQuery() {
    const firstFood = await client.query({
      query: SINGLE_ORDER_QUERY,
      variables: {
        id: query.id,
      },
    });
    setOrderDetails(firstFood.data.Order);
  }

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <Header />
      <OrderStyled>
        <div className="order-reciept">
          <h1>Order Reciept</h1>
          <div className="customer-details">
            <h3>Credit Card Info:</h3>
            <p>{orderDetails?.charge}</p>
            <p>Subtotal: ${orderDetails?.total}</p>
            <h3>Customer Info:</h3>
            <p>First Name: {orderDetails?.firstName}</p>
            <p>Last Name: {orderDetails?.lastName}</p>
            <p>Email Address: {orderDetails?.email}</p>
          </div>
          <div className="food-details">
            <h3>Order:</h3>
            {orderDetails?.customItems.map((item, key) => {
              return (
                <>
                  <h4>{item.name}</h4>
                  <p>Toppings - {item.choice_of_two_toppings}</p>
                  <p>Dressing - {item.choice_of_dressing}</p>
                </>
              );
            })}
            <br></br>
            {orderDetails?.fixedItems.map((item, key) => {
              return (
                <>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </>
              );
            })}
          </div>
        </div>
        <button><Link href='/'><p className='return-home' >Return Home</p></Link></button>
      </OrderStyled>
      <Footer />
    </>
  );
};

export default OrderPage;
