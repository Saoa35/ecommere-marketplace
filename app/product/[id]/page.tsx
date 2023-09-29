type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage(props: ProductPageProps) {
  console.log(props);

  return <main className="">ProductPage</main>;
}
