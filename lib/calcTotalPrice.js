export function calcTotalPrice(fixed, custom) {
  const fixedPrices = [];
  const foodPrice = () => {
    fixed?.allFoodCartItems?.map((tally, item) => {
      fixedPrices.push(tally.food.price);
    });
    return fixedPrices;
  };
  const customPrices = [];
  const saladPrice = () => {
    custom?.allSaladCartItems?.map((tally, item) => {
      customPrices.push(tally.salad.price);
    });
    return customPrices;
  };

  const fixedFoodPrice = foodPrice().reduce((tally, item) => tally + item, 0);
  const customFoodPrice = saladPrice().reduce((tally, item) => tally + item, 0);
  return fixedFoodPrice + customFoodPrice;
}
