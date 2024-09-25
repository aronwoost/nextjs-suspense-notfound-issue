import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = ({ params }: Props) => {
  if (params.id === "10") {
    notFound();
  }

  return <h1>{`Product with id: ${params.id}`}</h1>;
};

export default ProductPage;
