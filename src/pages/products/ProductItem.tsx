import { memo } from 'react';
import ProductArticle from './ProductArticle';
import { IProduct } from './types';

interface IProductItemProps extends IProduct {
  count: number;
  quantity: number;
  onRemove?(): void;
  onAdd?(): void;
}

function ProductItem({
  id,
  name,
  articles,
  onAdd,
  onRemove,
  count = 0,
  quantity,
}: IProductItemProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{name}</h3>
        {articles.map((article) => (
          <ProductArticle key={article.id} {...article} />
        ))}
        <button
          disabled={!count}
          type="button"
          className="btn btn-primary"
          onClick={onRemove}
        >
          -
        </button>
        <span className="p-2">{count}</span>
        <button
          disabled={count >= quantity}
          type="button"
          className="btn btn-primary"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default memo(ProductItem);
