import { useCart } from '../../context/cart';
import ProductItem from './ProductItem';
import { useProducts } from './productsHooks';

function Products() {
  const { items, addProduct, removeProduct } = useCart();
  const { products, loading, error } = useProducts();

  if (loading) return <p>...loading</p>;
  if (error)
    return (
      <p>
        {error.name} {error.message}
      </p>
    );

  if (!products || !products.length) return <p>No products found</p>;

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductItem
            {...product}
            count={items[product.id]}
            quantity={product.quantity}
            onAdd={() => addProduct(product)}
            onRemove={() => removeProduct(product)}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
