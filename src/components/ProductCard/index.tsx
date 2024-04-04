import { PencilSimple } from "@phosphor-icons/react";
import { TypeView } from "../../TabView";
import { Product } from "../../models/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  typeView: TypeView;
  product: Product;
  OnOpenModal: () => void;
}

export function ProductCard({
  typeView = TypeView.COLUMN,
  product,
  OnOpenModal,
}: ProductCardProps) {
  return (
    <div className="p-2 bg-[#323232] rounded-lg">
      {typeView === TypeView.COLUMN ? (
        <div>
          <div className="bg-[#4A4A4A] h-40 w-full rounded-lg flex items-center justify-center">
            <img src="/image.svg" alt="image" />
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <button className="text-white text-sm" onClick={OnOpenModal}>
                {product.title}
              </button>

              <Link to={`/edit-product/${product.id}`}>
                <PencilSimple size={20} className="text-blue-dark" />
              </Link>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-white text-sm">
                <span className="text-gray-primary text-sm">Quantity:</span>
                {product.quantity}
              </p>
              <p className="text-white text-sm">
                <span className="text-gray-primary text-sm">Measure Un:</span>
                {product.measure}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-16 w-36 bg-[#4A4A4A] flex items-center justify-center rounded">
              <img src="/image.svg" alt="image" className="w-4 h-8s" />
            </div>
            <div>
              <span className="text-white text-sm">{product.title}</span>
              <div className="flex flex-wrap mt-3 gap-6">
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">Quantity: </span>
                  {product.quantity}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Measure Un.:
                  </span>
                  {product.measure}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Purchase Price:
                  </span>
                  {product.purchasePrice}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Sales Price:
                  </span>
                  {product.salesPrice}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">Currency:</span>
                  {product.currency}
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">Supplier:</span>
                  {product.supplier}
                </p>
              </div>
            </div>
          </div>

          <button>
            <PencilSimple size={20} className="text-blue-dark" />
          </button>
        </div>
      )}
    </div>
  );
}
