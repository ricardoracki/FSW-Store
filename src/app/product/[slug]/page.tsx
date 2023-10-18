import { prisma } from "@/lib/prisma";
import ProductImages from "./components/product-images";

interface Props {
  params: {
    slug: string;
  };
}
const ProductDetailsPage = async ({ params }: Props) => {
  const product = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) return null;

  return (
    <div className="">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
