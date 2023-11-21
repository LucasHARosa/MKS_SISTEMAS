export interface ProductProps{
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListProductsProps{
  products: ProductProps[];
}

export interface queryProps{
  page: number;
  rows:number;
  sortBy: "id"|"name"|"price";
  orderBy: "ASC"|"DESC";
}

export interface CartProductProps{
  product: ProductProps;
  quantity: number;
}