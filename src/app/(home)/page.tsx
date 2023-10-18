import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prisma.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="">
      <PromoBanner src="/banner (1).png" alt="Ate 55% de desconto" />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/Banner (2).png" alt="Ate 55% de desconto em mouses" />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
