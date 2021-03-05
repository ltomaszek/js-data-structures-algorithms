// Best Time to Buy and Sell Stock

prices = [7,1,5,3,6,4]

/**
 * As many transaction as possible can be made
 */
function maxProfit() {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i-1] < prices[i]) {
      profit += prices[i] - prices[i-1];
    }
  }
  return profit;
}

/**
 * Only one buy and one sell i possible
 */
function maxProfitWithOneTransaction() {
  if (prices.length < 2) {
    return 0;
  }
  let profit = 0;
  let buyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - buyPrice);
    }

  }
  return profit;
}

console.log('Max profit with many transactions:', maxProfit());
console.log('Max profit with one transactions :', maxProfitWithOneTransaction());