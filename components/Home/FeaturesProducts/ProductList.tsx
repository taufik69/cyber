import { getProducts } from "@/api/api";
import { ProductBox } from "@/components/commoncomponents/Product";
import { ProductTypes } from "@/types/types";
import { useEffect, useState } from "react";

type ProductListProps = {
  category: string;
};

export default function ProductList({ category }: ProductListProps) {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  useEffect(() => {
    const abortController = new AbortController();

    const fetchProducts = async () => {
      try {
        const products = await getProducts(category);
        setProducts(products?.products);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(err);
        }
      }
    };

    fetchProducts();

    return () => {
      abortController.abort(); // cancel request if component unmounts
    };
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
      <div>
        <ProductBox productsItem={products} />
      </div>
    </div>
  );
}
