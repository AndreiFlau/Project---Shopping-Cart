async function fetchStoreInfo() {
  const products = [];

  for (let index = 0; index < 11; index++) {
    try {
      const result = await fetch(`https://fakestoreapi.com/products/${index + 1}`);
      const resJson = await result.json();

      products.push({ title: resJson.title, price: resJson.price, description: resJson.description, image: resJson.image });
    } catch (error) {
      console.log(`Failed to fetch product ${index}: `, error);
    }
  }

  return products;
}

export default fetchStoreInfo;
