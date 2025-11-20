import { getProducts } from "@/api/api";
import { ProductBox } from "@/components/commoncomponents/Product";
import { ProductTypes } from "@/types/types";
import { useEffect, useState } from "react";

type ProductListProps = {
  category: string;
};

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 p-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-xl p-4 h-[450px] flex flex-col gap-3"
        >
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-3 w-3/4 rounded"></div>
          <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default function ProductList({ category }: ProductListProps) {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await getProducts(category);
        setProducts(products?.products);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      abortController.abort();
    };
  }, [category]);

  return (
    <div className="p-4">
      {loading ? <ProductSkeleton /> : <ProductBox productsItem={products} />}
    </div>
  );
}
