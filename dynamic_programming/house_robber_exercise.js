// Rob as much as you can, but never 2 neighbour houses

// money in each hose on the street
const money = [3, 1, 2, 3];

function rob() {
  let totalPrev0 = 0;
  let totalPrev1 = 0;
  let totalCurr0 = 0;
  let totalCurr1 = 0;

  function robR(i) {
    if (i >= money.length) {
      return;
    }
    if (i % 2 == 0) {
      totalCurr0 = Math.max(totalPrev0, totalPrev1) + money[i];
      totalPrev1 = totalCurr1;
    } else {
      totalCurr1 = Math.max(totalPrev0, totalPrev1) + money[i];
      totalPrev0 = totalCurr0;
    }
    robR(i + 1);
  }
  robR(0);
  return Math.max(totalCurr0, totalCurr1);
}

console.log(rob());