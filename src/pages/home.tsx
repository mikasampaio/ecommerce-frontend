import Authenticated from "@/components/Authenticated";
import { Product, ProductService } from "@/services/products";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await ProductService.get();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Authenticated>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </Authenticated>
  );
}
