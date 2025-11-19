export const getProducts = async (category = "smartphones") => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,

    { cache: "no-cache" ,  signal: AbortSignal.timeout(10000) }
  );
  return res.json();
};
