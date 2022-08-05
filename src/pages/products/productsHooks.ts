import { useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { IArticle, IProduct } from './types';

interface IProductWithQuantity extends IProduct {
  quantity: number;
}

export const useProducts = () => {
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useFetch<Array<IProduct>>(`${process.env.REACT_APP_API_URL}/products`);
  const {
    data: articlesData,
    loading: articlesLoading,
    error: articlesError,
  } = useFetch<Array<IArticle>>(`${process.env.REACT_APP_API_URL}/articles`);

  const articlesById = useMemo(
    () =>
      articlesData?.reduce((acc, { id, amountInStock }) => {
        acc[id] = amountInStock;
        return acc;
      }, {} as Record<string, number>) || {},
    [articlesData]
  );

  const products: IProductWithQuantity[] = useMemo(() => {
    return (
      productsData?.map((productData) => {
        const quantity = productData.articles.map((article) =>
          Math.floor(articlesById[article.id] / article.amountRequired)
        );
        return { ...productData, quantity: Math.min(...quantity) };
      }) || []
    );
  }, [productsData, articlesById]);

  return {
    products,
    articlesById,
    loading: productsLoading || articlesLoading,
    error: productsError || articlesError,
  };
};
