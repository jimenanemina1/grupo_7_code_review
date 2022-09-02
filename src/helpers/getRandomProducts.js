const getRandomProducts = (numberOfProducts, allProducts) => {
    let randomProducts = [];
    while (randomProducts.length < numberOfProducts) {
      let randomProduct =
        allProducts[Math.floor(Math.random() * allProducts.length)];
      randomProducts.indexOf(randomProduct) == -1
        ? randomProducts.push(randomProduct)
        : "";
    }
    return randomProducts;
  };

  module.exports = getRandomProducts;