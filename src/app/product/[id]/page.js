import { notFound } from "next/navigation";

const ProductPage = ({ params }) => {
  if (params.id === "10") {
    notFound();
  }

  return <h1>{`Product with id: ${params.id}`}</h1>;
};

export default ProductPage;
