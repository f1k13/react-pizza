type item = {
  title: string;
  id: number;
  price: number;
  types: number[];
  sizes: number[];
  imageUrl: string;
  category: number;
  rating: number;
};

export interface ICatalogItem {
  item: item;
}
