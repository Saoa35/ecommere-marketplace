type ProductProps = {
  product: Product;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
    </div>
  );
};
