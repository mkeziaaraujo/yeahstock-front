import { useParams } from "react-router-dom";
import { CreateOrEditProduct } from "../../components/createOrEditProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../models/product";

export function EditProduct() {
  const [product, setProduct] = useState<Product>({} as Product);
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  async function getProduct() {
    try {
      const { data: productResponse } = await axios.get(
        `${import.meta.env.VITE_API_HOST}/products/${id}`
      );

      setProduct(productResponse);
    } catch (error) {
      console.error(error);
      alert("Error when get product,try again later.");
    }
  }
  return <CreateOrEditProduct product={product} />;
}
