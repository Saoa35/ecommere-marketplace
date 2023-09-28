export const Product = ({ product }: Props) => {
  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
    </div>
  );
};
