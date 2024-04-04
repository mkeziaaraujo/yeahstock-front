import { productStatus } from "../enums/productStatus";

export interface Product {
  id: string;
  title: string;
  quantity: number;
  measure: string;
  salesPrice: number;
  purchasePrice: number;
  currency: string;
  supplier: string;
  status: productStatus;
  description: string;
  createdAt: Date;
}
