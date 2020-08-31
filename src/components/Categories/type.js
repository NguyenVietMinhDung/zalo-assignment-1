export type Product = {
  id: ?string,
  price: number,
  oldPrice: ?number,
  name: string,
  description: string,
  img: string,
  editable: ?boolean,
  quantity: ?number,
};

export type Category = {
  id: string,
  name: string,
  items: Array<Product>,
};

export type Props = {
  categories: Array<Category>
};
