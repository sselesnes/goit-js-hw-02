function getShippingCost(country) {
  let price = null;
  const countries = {
    name: [`China`, `Chile`, `Australia`, `Jamaica`],
    cost: [100, 250, 170, 120],
  };

  let count = 0;
  while (countries.name[count]) {
    if (countries.name[count] == country) {
      price = countries.cost[count];
      break;
    }
    count++;
  }

  return price
    ? `Shipping to ${country} will cost ${price} credits`
    : `Sorry, there is no delivery to your country`;
}

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
