function isEnoughCapacity(products, containerSize) {
  const productQuantities = Object.values(products);

  const totalQuantity = productQuantities.reduce(
    (total, quantity) => total + quantity,
    0
  );

  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // Повинно вивести true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // Повинно вивести false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // Повинно вивести true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // Повинно вивести false
