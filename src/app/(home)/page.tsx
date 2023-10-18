import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner (1).png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Ate 55% de desconto"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <p className="mb-2 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src="/Banner (2).png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Ate 55% de desconto em mouses"
      />
    </div>
  );
}
