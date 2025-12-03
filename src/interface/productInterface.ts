export interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image_url?: string;     // match your model
  category_id: number;    // must be required because DB requires it
  createdAt?: Date;
  updatedAt?: Date;
}
