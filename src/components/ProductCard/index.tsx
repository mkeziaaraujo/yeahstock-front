import { PencilSimple } from "@phosphor-icons/react";
import { TypeView } from "../../TabView";

interface ProductCardProps {
  typeView: TypeView;
}

export function ProductCard({ typeView = TypeView.COLUMN }: ProductCardProps) {
  return (
    <div className="p-2 bg-[#323232] rounded-lg">
      {typeView === TypeView.COLUMN ? (
        <div>
          <div className="bg-[#4A4A4A] h-40 w-full rounded-lg flex items-center justify-center">
            <img src="/image.svg" alt="image" />
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <button className="text-white text-sm">Nome do Produto</button>

              <PencilSimple size={20} className="text-blue-dark" />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-white text-sm">
                <span className="text-gray-primary text-sm">Quantity:</span>
                106
              </p>
              <p className="text-white text-sm">
                <span className="text-gray-primary text-sm">Measure Un:</span>
                106
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
              <span className="text-white text-sm">Product Name</span>
              <div className="flex flex-wrap mt-3 gap-6">
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">Quantity: </span>
                  106
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Measure Un.:
                  </span>
                  106
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Purchase Price:
                  </span>
                  535
                </p>
                <p className="text-white text-sm">
                  <span className="text-gray-primary text-sm">
                    Sales Price:
                  </span>
                  512
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
