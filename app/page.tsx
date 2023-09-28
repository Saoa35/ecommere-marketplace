export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // console.log(products);

  return (
    <main className="">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className=" text-5xl font-bold text-center">DEALS OF THE DAY</h1>

        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        ))}

        <div className=""></div>
      </section>
    </main>
  );
}
