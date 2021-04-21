import { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { ALL_FOOD } from './queries/menuQurie';
import { MenuStyled } from './styles/MenuStyled';
import CustomSalad from './CustomSalad';
import FoodItem from './FoodItem';
import styled from 'styled-components';

function Menu() {
  const client = useApolloClient();
  const [firstFoods, setFirstFoods] = useState([]);
  const [mainFoods, setMainFoods] = useState([]);
  const [dessertFoods, setDessertFoods] = useState([]);

  async function runQuery() {
    const firstFood = await client.query({
      query: ALL_FOOD,
      variables: {
        name: 'First',
      },
    });

    const mainFood = await client.query({
      query: ALL_FOOD,
      variables: {
        name: 'Main',
      },
    });

    const dessertFood = await client.query({
      query: ALL_FOOD,
      variables: {
        name: 'Desert',
      },
    });

    setFirstFoods(firstFood.data.allFoodItems);
    setMainFoods(mainFood.data.allFoodItems);
    setDessertFoods(dessertFood.data.allFoodItems);
  }

  useEffect(() => {
    runQuery();
  }, []);

  const MenuHero = styled.div`
    background: url('/Images/bass.jpg') no-repeat center center/cover;
    position: relative;
    top: 95px;
    height: 50vh;
    text-align: center;
    .eatery {
      height: auto;
      opacity: 90%;
      position: absolute;
      top: 5%;
      left: 20%;
      right: 20%;
      width: 60%;
      background: #efd85a;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 24pt;
      color: #662916;
      letter-spacing: 8px;
      font-weight: 100;
      position: relative;
      padding: 48px 40px;
    }
    h1:before {
      content: ' ';
      width: 35%;
      position: absolute;
      z-index: 2;
      top: 1px;
      left: 30%;
      right: 1px;
      bottom: 1px;
      border-bottom: 2px solid darkgreen;
      transform: skewY(-1.5deg);
    }
    h1:after {
      content: ' ';
      position: absolute;
      width: 35%;
      z-index: 2;
      top: 0px;
      left: 30%;
      right: 0px;
      bottom: 0px;
      border-bottom: 2px solid darkgreen;
      transform: skewY(1deg);
    }
    p {
      color: #662916;
      line-height: 1.5;
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      padding: 58px 40px;
    }
    @media(max-width: 920px) {
      .eatery {
        width: 100%;
        max-height: 50vh;
        height: auto;
        top: 0;
        left: 0;
      }
    }
    @media(max-width: 420px) {
      .eatery {
        height: 100%;
      }
      p {
        display: none;
      }
    }
  `;
  
  return (
    <>
      <MenuHero className="menu-hero">
        <div className="eatery">
          <h1>Welcome To The Eatery</h1>
          <p>
            We are uniquely driven by Chef - Farmer partnerships offering
            Breakfast, Midday and main seasonal meals lorem ipsum meals and
            breakfast lunch
          </p>
        </div>
      </MenuHero>
      <MenuStyled>
        <div className="menu-container">
          <h1 className="headline">SEASONAL DAILY DOSE</h1>
          <h1>First</h1>
          <CustomSalad />
          <div className="first">
            {firstFoods.map((food, inx) => {
              return <FoodItem food={food} key={inx} />;
            })}
          </div>
          <h1>Main</h1>
          <div className="main">
            {mainFoods.map((food, inx) => {
              return <FoodItem food={food} key={inx} />;
            })}
          </div>
          <h1>Dessert</h1>
          <div className="dessert">
            {dessertFoods.map((food, inx) => {
              return <FoodItem food={food} key={inx} />;
            })}
          </div>
        </div>
      </MenuStyled>
    </>
  );
}

export default Menu;
