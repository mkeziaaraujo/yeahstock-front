import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFields } from "../../utils/validateFields";
import axios from "axios";
import { Button } from "../Button";
import { Input } from "../input";
import { Textarea } from "../Textarea";
import { Product } from "../../models/product";
import { Trash } from "@phosphor-icons/react";

interface CreateOrEditProductProps {
  product?: Product;
}

export function CreateOrEditProduct({ product }: CreateOrEditProductProps) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [supplier, setSupplier] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  const isEdit = !!product?.id;

  useEffect(() => {
    if (isEdit) {
      setTitle(product?.title || "");
      setQuantity(product?.quantity || 0);
      setMeasure(product?.measure || "");
      setPurchasePrice(product?.purchasePrice || 0);
      setSalesPrice(product?.salesPrice || 0);
      setCurrency(product?.currency || "");
      setSupplier(product?.supplier || "");
      setDescription(product?.description || "");
    }
  }, [product]);

  async function createProduct() {
    try {
      const product = {
        title,
        quantity,
        measure,
        purchasePrice,
        salesPrice,
        currency,
        supplier,
        description,
        status: "active",
        id: crypto.randomUUID,
        createdAt: new Date(),
      };
      const validate = validateFields(product);

      if (validate.length > 0) {
        setErrors(validate);
        return;
      }

      await axios.post(`${import.meta.env.VITE_API_HOST}/products`, {
        product,
      });
      alert("Product created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    }
  }

  async function editProduct() {
    try {
      const newProduct = {
        title,
        quantity,
        measure,
        purchasePrice,
        salesPrice,
        currency,
        supplier,
        description,
        status: "active",
        id: product?.id,
        createdAt: new Date(),
      };
      const validate = validateFields(newProduct);

      if (validate.length > 0) {
        setErrors(validate);
        return;
      }

      await axios.put(
        `${import.meta.env.VITE_API_HOST}/products/${product?.id}`,
        newProduct
      );
      alert("Product edited successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error when edit product");
    }
  }

  async function handleDeleteProduct() {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_HOST}/products/${product?.id}`
      );
      alert("Product deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error when delete product,try again later!");
    }
  }

  return (
    <div className="mt-12 w-full max-w-2xl">
      <div className="flex  items-center justify-between">
        <h1 className="text-2xl text-white font-semibold">Product</h1>

        {isEdit && (
          <Button
            variant="error"
            startIcon={Trash}
            onClick={handleDeleteProduct}
          >
            Trash
          </Button>
        )}
      </div>

      <div className="flex items-center gap-5 mt-10">
        <div className="w-36 h-36 bg-[#4A4A4A] rounded-lg flex items-center justify-center mt-3">
          <img src="/image.svg" alt="image" />
        </div>

        <div className="flex flex-col gap-10 justify-between flex-1">
          <Input
            label="Product name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            isError={errors.includes("title")}
          />
          <div className="flex gap-4 items-center">
            <div className="max-w-28">
              <Input
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                isError={errors.includes("quantity")}
              />
            </div>
            <div className="max-w-28">
              <Input
                label="Measure_unity"
                type="string"
                value={measure}
                onChange={(event) => setMeasure(event.target.value)}
                isError={errors.includes("measure")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,1fr,1fr,2fr] gap-4 mt-10">
        <Input
          label="Purchase price"
          type="number"
          value={purchasePrice}
          onChange={(event) => setPurchasePrice(Number(event.target.value))}
          isError={errors.includes("purchasePrice")}
        />
        <Input
          label="Sales Price"
          type="number"
          value={salesPrice}
          onChange={(event) => setSalesPrice(Number(event.target.value))}
          isError={errors.includes("salesPrice")}
        />
        <Input
          label="Currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
          isError={errors.includes("currency")}
        />
        <Input
          label="Supplier"
          type="number"
          value={supplier}
          onChange={(event) => setSupplier(event.target.value)}
          isError={errors.includes("supplier")}
        />
      </div>

      <div className="mt-10">
        <Textarea
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          isError={errors.includes("description")}
        />
      </div>
      <div className="mt-10">
        <Button
          onClick={() => {
            if (isEdit) {
              editProduct();
              return;
            } else {
              createProduct();
            }
          }}
        >
          {isEdit ? "Edit product" : "Save changes"}
        </Button>
      </div>
    </div>
  );
}
