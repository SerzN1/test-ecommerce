import { memo } from 'react';
import { IProductArticle } from './types';

function ProductArticle({ amountRequired, id }: IProductArticle) {
  return (
    <p id={id}>
      Article SKU: {id}
      <br />
      Amount required: {amountRequired}
    </p>
  );
}

export default memo(ProductArticle);
