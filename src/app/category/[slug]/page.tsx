import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { categoryIcon } from "@/constants/category-icons";
import { computeProductTotalPrice } from "@/helpers/product";
import { prisma } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
  const category = await prisma.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) return null;

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        {categoryIcon[params.slug as keyof typeof categoryIcon]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            product={computeProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
