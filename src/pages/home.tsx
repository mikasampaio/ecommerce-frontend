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
  const [products, setProducts] = useState<Product[]>([
    {
      _id: "67242bcc2eb7774697d09964",
      name: "Headset sem fio",
      price: 120,
      discount: 0.1,
      category: {
        _id: "67242b6b185c8ada21da6fb2",
        name: "Vestido",
        status: {
          createdAt: "2024-11-01T01:15:54.366Z",
          updatedAt: null,
          deletedAt: null,
        },
      },
      stock: [
        {
          color: "#04a8c5",
          variations: [
            {
              name: "Vestido vermelho",
              size: "M",
              quantity: 2,
              path: ["/images/products/vestido-vermelho-m.jpg"],
              description: "Vestido vermelho, tamanho M",
              _id: "67242bcc2eb7774697d09962",
            },
            {
              name: "Vestido vermelho",
              size: "L",
              quantity: 3,
              path: ["/images/products/vestido-vermelho-g.jpg"],
              description: "Vestido vermelho, tamanho G",
              _id: "67242bcc2eb7774697d09963",
            },
          ],
          _id: 1,
        },
      ],
      status: {
        createdAt: "2024-11-01T01:15:54.551Z",
        updatedAt: null,
        deletedAt: null,
      },
    },
    {
      _id: "67242bcc2eb7774697d09964",
      name: "Casaco feminino",
      price: 120,
      discount: null,
      category: {
        _id: "67242b6b185c8ada21da6fb2",
        name: "Vestido",
        status: {
          createdAt: "2024-11-01T01:15:54.366Z",
          updatedAt: null,
          deletedAt: null,
        },
      },
      stock: [
        {
          color: "#c50404",
          variations: [
            {
              name: "Vestido vermelho",
              size: "M",
              quantity: 2,
              path: ["/images/products/vestido-vermelho-m.jpg"],
              description: "Vestido vermelho, tamanho M",
              _id: "67242bcc2eb7774697d09962",
            },
            {
              name: "Vestido vermelho",
              size: "L",
              quantity: 3,
              path: ["/images/products/vestido-vermelho-g.jpg"],
              description: "Vestido vermelho, tamanho G",
              _id: "67242bcc2eb7774697d09963",
            },
          ],
          _id: 1,
        },
      ],
      status: {
        createdAt: "2024-11-01T01:15:54.551Z",
        updatedAt: null,
        deletedAt: null,
      },
    },
  ]);

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
