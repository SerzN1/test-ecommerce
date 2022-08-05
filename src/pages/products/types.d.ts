export interface IArticle {
  id: string;
  name: string;
  amountInStock: number;
}

export interface IProductArticle {
  id: string;
  amountRequired: number;
}

export interface IProduct {
  id: string;
  name: string;
  articles: IProductArticle[];
}
