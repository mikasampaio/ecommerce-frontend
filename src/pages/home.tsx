import Authenticated from "@/components/Authenticated";
import { Product, ProductService } from "@/services/products";
import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageNext from "next/image";
import Capa from "../images/capa.jpg";
import Categories from "@/components/Categories";
import Filters from "@/components/Filter";
import OfferProduct from "@/components/Products/OfferProducts";
import MainProduct from "@/components/Products/MainProducts";
import Footer from "@/components/Footer";

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
      <VStack w="100%">
        <ImageNext
          src={Capa}
          alt="Capa da página"
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover",
            objectPosition: "0px -128px",
          }}
        />

        <Categories />
        <Filters />
        <OfferProduct
          products={products.filter((product) => product.discount)}
        />
        <MainProduct
          products={products.filter((product) => !product.discount)}
        />
        <Footer />
      </VStack>
    </Authenticated>
  );
}
